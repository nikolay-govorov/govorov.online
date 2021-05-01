module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy({ "static/**": "." });
    eleventyConfig.addPassthroughCopy("src/images");

    return {
        dir: {
            input: "src",
            output: "_site",
        },
    }
};
