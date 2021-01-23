module.exports = {
  onCreateWebpackConfig({ actions, stage }) {
    if (stage === 'build-javascript') // If production JavaScript and CSS build
      actions.setWebpackConfig({ devtool: false }); // Turn off source maps
  }
};
