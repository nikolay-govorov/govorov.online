const path = require('path');

const { ANALYZE: analyze } = process.env;

module.exports = {
  siteMetadata: {
    lang: 'ru',
    siteUrl: 'https://govorov.online',

    themeColor: '#ffffff',

    title: 'Николай Говоров',
    author: 'Николай Говоров',
    email: 'nikolay_govorov@bk.ru',
    description: 'Живу в Питере, работаю фронтенд-разработчиком для ВКонтакте',
    authorBirthDate: '1999-09-24',

    avatar: 'https://s.gravatar.com/avatar/72cbf564ef7b21b730ec93a6e3abc9f2',

    job: {
      name: 'ВКонтакте',
      url: 'https://vk.com',
    },

    // TODO: Перенести в переменную окружения
    yandexVerificationCode: 'a85fbaade3d4ec4d',

    disqus: {
      shortname: 'govorov-online'
    }
  },
  plugins: [
    'gatsby-plugin-astroturf',
    'gatsby-plugin-postcss',

    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'data'),
      },
    },
    'gatsby-transformer-yaml',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src', 'pages'),
      },
    },
    'gatsby-transformer-remark',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/components/block/logo/images/logo.png',
        appName: 'govorov.online',
        icons: {},
      },
    },

    'gatsby-plugin-feed',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',

    'gatsby-plugin-netlify',

    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$/,
        exclude: /(node_modules|\.cache|public)/,
        options: {
          emitWarning: true,
        }
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: analyze,
      }
    }
  ]
};
