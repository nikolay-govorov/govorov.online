const autoprefixer = require('autoprefixer');
const postcssAssets = require('postcss-assets');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');

const { NODE_ENV: env = 'development' } = process.env;

module.exports = {
  map: env === 'development' ? 'inline' : null,

  plugins: [
    // Features
    postcssImport(),

    postcssPresetEnv({ stage: 0 }),

    postcssAssets({
      loadPaths: ['./src/assets']
    }),

    // Cross-browser
    autoprefixer(),
  ],
};
