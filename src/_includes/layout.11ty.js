const meta = require('../../metadata.json');

const pages = [
  { title: 'Обо мне', url: '/' },
  { title: 'Желания', url: 'https://notion.so/96248504c9234191ad037b66f02fafbd', external: true },
  { title: 'Резюме', url: 'https://www.notion.so/Frontend-engineer-0d0ebccf2eb040d8b8360ddde1796983', external: true },
];

exports.data = {}

exports.render = (data) => {
  const logo = '/images/logo.png';
  const avatarJPG = '/images/avatar.jpg';
  const avatarWEBP = '/images/avatar.webp';
  const avatarFull = '/images/nikolay_govorov.jpg';
  const linkExternal = '/images/linkExternal.svg';

  const { author: { contacts, name } } = meta;

  const pageTitle = data.title || meta.site.name;
  const year = new Date().getFullYear();

  return `
    <!doctype html>
    <html lang="${meta.site.lang}">
      <head>
        <meta name="yandex-verification" content="${meta.access.yandex}" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>"${pageTitle}"</title>
        <meta charset="utf-8" />
        <meta name="theme-color" content="${meta.site.themes.light}" />
        <meta name="description" content="${meta.site.description}" />

        <link rel="icon" type="image/png" href="${logo}" />
        <link rel="canonical" href="${meta.site.url}" />

        <meta property="og:url" content="${meta.site.url}" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="${avatarFull}" />
        <meta property="og:image:width" content="1416" />
        <meta property="og:image:height" content="1416" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:title" content="${pageTitle}" />
        <meta property="og:locale" content="${meta.site.lang}" />
        <meta property="og:site_name" content="${meta.site.name}" />
        <meta property="og:description" content="${meta.site.description}" />

        <!-- Disable auto detected phone links for Safari and BlackBerry -->
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-rim-auto-match" content="none" />

        <link rel="stylesheet" href="/styles/main.css">
      </head>

      <body>
        <div class="container">
          <div class="header">
            <header class="header_container">
              <div class="header_logo">
                <a
                  class="link--clean logo_link"
                  href="${avatarFull}"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  <picture class="logo_avatar">
                    <source srcSet="${avatarWEBP}" type="image/webp" />

                    <img
                      class="logo_avatar"
                      src="${avatarJPG}"
                      alt="Фото Николая Говорова"
                      width="80"
                      height="80"
                    />
                  </picture>
                </a>
              </div>

              <div class="header_navigation">
                <p class="header_title">
                  ${meta.site.name}
                </p>

                <div class="nav_container" aria-label="Страницы сайта">
                  <ul class="nav_list">
                    ${pages.map(({ title, url, external }) => `
                      <li class="nav_list__item" key={url}>
                        ${external ? (`
                          <a
                            href="${url}"
                            title="${url}"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            class="link link--not-visited link--external"
                          >
                            ${title}

                            <img
                              src="${linkExternal}"
                              alt=""
                              width="16"
                              height="16"
                              aria-label="Ссылка будет открыта в отдельной вкладке"
                            />
                          </a>
                        `) : (`
                          <a
                            href="${url}"
                            class="link link--not-visited"
                            activeclass="link--active"
                          >
                            ${title} 
                          </a>
                        `)}
                      </li>
                    `).join("")}
                  </ul>
                </div>
              </div>
            </header>
          </div>

          <div class="content">
            ${data.content}
          </div>

          <div class="footer">
            <footer class="footer_container">
              <div class="contacts_container">
                <ul class="contacts_list">
                  ${contacts.map(contact => `
                    <li class="contacts_list__item" key=$"{contact.url}">
                      <a rel="me" href="${contact.url}">${contact.title}</a>
                    </li>
                  `).join("")}
                </ul>
              </div>

              <span class="small">
                &copy; 2015 - ${year}, ${name}
              </span>
            </footer>
          </div>
        </div>
      </body>
    </html>
  `;
}
