const path = require('path');
const meta = require('./data/meta.json');

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
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },

    'gatsby-plugin-feed',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
  ],
};
