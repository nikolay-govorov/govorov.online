import React, { useMemo } from 'react';
import cx from 'classnames';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';

import logo from '../../images/logo.png';
import avatarJPG from '../../images/avatar.jpg';
import avatarWEBP from '../../images/avatar.webp';
import avatarFull from '../../images/nikolay_govorov.jpg';
import linkExternal from '../../images/linkExternal.svg';

import meta from '../../../metadata.json';

import '../../styles/main.css';
import styles from './layout.module.css';

const SIZE = 80;
const pages = [
  { title: 'Обо мне', url: '/' },
  { title: 'Желания', url: 'https://notion.so/96248504c9234191ad037b66f02fafbd', external: true },
  { title: 'Резюме', url: 'https://www.notion.so/Frontend-engineer-0d0ebccf2eb040d8b8360ddde1796983', external: true },
];

const AVATAR_SIZE = 1416;

function getCanonical(domain, path) {
  const url = path.replace(/index\.html$/ig, '');

  return `${domain}${url}`;
}

export default function BaseLayout({
  children, location, title,
}) {
  const { author: { contacts, name } } = meta;

  const pageTitle = title || meta.site.name;
  const canonical = getCanonical(meta.site.url, location.pathname);
  const year = useMemo(() => new Date().getFullYear(), []);

  const localUrl = withPrefix(location.pathname);

  return (
    <>
      <Helmet>
        <html lang={meta.site.lang} />

        <meta name="yandex-verification" content={meta.access.yandex} />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{pageTitle}</title>
        <meta name="theme-color" content={meta.site.themes.light} />
        <meta name="description" content={meta.site.description} />

        <link rel="icon" type="image/png" href={logo} />
        <link rel="canonical" href={canonical} />

        <meta property="og:url" content={meta.site.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={avatarFull} />
        <meta property="og:image:width" content={AVATAR_SIZE} />
        <meta property="og:image:height" content={AVATAR_SIZE} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:locale" content={meta.site.lang} />
        <meta property="og:site_name" content={meta.site.name} />
        <meta property="og:description" content={meta.site.description} />

        {/* Disable auto detected phone links for Safari and BlackBerry */}
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-rim-auto-match" content="none" />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.header}>
          <header className={styles.header_container}>
            <div className={styles.header_logo}>
              <a
                className={cx('link--clean', styles.logo_link)}
                href={avatarFull}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <picture className={styles.logo_avatar}>
                  <source srcSet={avatarWEBP} type="image/webp" />

                  <img
                    className={styles.logo_avatar}
                    src={avatarJPG}
                    alt="Фото Николая Говорова"
                    width={SIZE}
                    height={SIZE}
                  />
                </picture>
              </a>
            </div>

            <div className={styles.header_navigation}>
              {localUrl === '/' ? (
                <h1 className={styles.header_title}>
                  {meta.site.name}
                </h1>
              ) : (
                  <p className={styles.header_title}>
                    {meta.site.name}
                  </p>
                )}

              <div className={styles.nav_container} aria-label="Страницы сайта">
                <ul className={styles.nav_list}>
                  {pages.map(({ title, url, external }) => (
                    <li className={styles.nav_list__item} key={url}>
                      {external ? (
                        <a
                          href={url}
                          title={url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="link link--not-visited link--external"
                        >
                          {` ${title} `}

                          <img src={linkExternal} alt="" aria-label="Ссылка будет открыта в отдельной вкладке" />
                        </a>
                      ) : (
                          <Link
                            to={url}
                            className="link link--not-visited"
                            activeClassName="link--active"
                          >
                            {` ${title} `}
                          </Link>
                        )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </header>
        </div>

        <div className={styles.content}>
          {children}
        </div>

        <div className={styles.footer}>
          <footer className={styles.footer_container}>
            <div className={styles.contacts_container}>
              <ul className={styles.contacts_list}>
                {contacts.map(contact => (
                  <li className={styles.contacts_list__item} key={contact.url}>
                    <a rel="me" href={contact.url}>{contact.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <span className="small">
              &copy; {`2015-${year}, ${name}`}
            </span>
          </footer>
        </div>
      </div>
    </>
  );
}
