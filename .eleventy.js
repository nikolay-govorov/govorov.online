const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

const postcssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const postcssAssets = require("postcss-assets");

function postcssPlugin(eleventyConfig, options = {}) {
    eleventyConfig.on("afterBuild", () => {
        const css = fs.readFileSync(options.from);

        postcss(options.plugins)
            .process(css, { from: options.from, to: options.to })
            .then(result => {
                fs.mkdirSync(path.dirname(options.to));
                fs.writeFileSync(options.to, result.css)

                if (result.map) {
                    fs.writeFileSync(`${options.to}.map`, result.map.toString())
                }
            });
    });
};

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(postcssPlugin, {
        from: "src/styles/main.css",
        to: "_site/styles/main.css",
        plugins: [
            postcssImport({}),
            postcssPresetEnv({ "stage": 0 }),
            postcssAssets({ "loadPaths": ["./src/images"] }),
        ]
    });

    eleventyConfig.addPassthroughCopy({ "static/**": "." });
    eleventyConfig.addPassthroughCopy("src/images");

    return {
        dir: {
            input: "src",
            output: "_site",
        },
    }
};
