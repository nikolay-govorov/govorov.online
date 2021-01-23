const path = require('path');
const meta = require('./metadata.json');

function getLast(list) {
  return list[list.length - 1];
}

module.exports = {
  siteMetadata: {
    title: meta.site.name,
    lang: meta.site.lang,
    siteUrl: meta.site.url,
    themeColor: meta.site.themes.light,
    description: meta.site.description,

    author: meta.author.name,
    email: meta.author.email,
    authorBirthDate: meta.author.birthDate,

    job: getLast(meta.author.jobs),
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src', 'pages'),
      },
    },

    'gatsby-plugin-robots-txt',
  ],
};
