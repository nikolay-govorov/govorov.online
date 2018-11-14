const autoprefixer = require('autoprefixer');
const postcssAssets = require('postcss-assets');
const postcssNormalize = require('postcss-normalize');
const postcssPresetEnv = require('postcss-preset-env');
const postcssEasyImport = require('postcss-easy-import');

const { NODE_ENV: env = 'development' } = process.env;

module.exports = {
  map: env === 'development' ? 'inline' : null,

  plugins: [
    // Features
    postcssEasyImport({
      extensions: ['.css', '.pcss']
    }),

    postcssPresetEnv({ stage: 0 }),

    postcssAssets(),

    // Cross-browser
    postcssNormalize(),
    autoprefixer(),
  ],
};
