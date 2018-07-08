const fs = require('fs');
const chokidar = require('chokidar');

const csso = require('csso');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const postcssAssets = require('postcss-assets');
const postcssReporter = require('postcss-reporter');
const postcssNormalize = require('postcss-normalize');
const postcssPresetEnv = require('postcss-preset-env');
const postcssEasyImport = require('postcss-easy-import');

const { WATCH = false, NODE_ENV: env = 'development' } = process.env;

const config = {
  paths: {
    source: './website/_css/main.pcss',
    destination: './website/_assets/main.css'
  }
};

function compileCSS() {
  const startTimestamp = Date.now();
  const source = fs.readFileSync(config.paths.source);

  return postcss([
    // Features
    postcssEasyImport({
      extensions: ['.css', '.pcss']
    }),
    postcssPresetEnv({ stage: 0 }),

    postcssAssets({
      loadPaths: [__dirname + '/website/_assets/']
    }),

    // Cross-browser
    postcssNormalize(),
    autoprefixer(),

    postcssReporter({ clearReportedMessages: true }),
  ])
    .process(source, {
      from: config.paths.source,
      to: config.paths.destination,
      map: env === 'development' ? 'inline' : null,
    })
    .then((result) => {
      result.warnings().forEach(warning => console.warn(warning.toString()));

      fs.writeFileSync(config.paths.destination, (env === 'production' ? csso.minify(result.css) : result).css);

      if (result.map) {
        fs.writeFileSync(config.paths.destination + '.map', result.map.toString());
      }
    })
    .then(() => {
      console.log(`Successfully built ${config.paths.destination} in ${(Date.now() - startTimestamp) / 1000}s`);
    })
    .catch(console.error);
}

if (WATCH) {
  chokidar
    .watch('./website/{_css,_includes,_layouts}/**/*.pcss')
    .on('all', compileCSS);
} else {
  compileCSS();
}
