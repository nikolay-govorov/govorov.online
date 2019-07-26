import React from 'react';
import { Link } from 'gatsby';

import styles from './navigation.module.css';
import linkExternal from '../../assets/images/linkExternal.svg';

const pages = [
  { title: 'Обо мне', url: '/' },
  { title: 'Заметки', url: '/notes/' },
  { title: 'Доклады', url: '/presentations/' },
  { title: 'Желания', url: 'https://notion.so/96248504c9234191ad037b66f02fafbd', external: true },
  { title: 'Резюме', url: 'https://www.notion.so/Frontend-engineer-0d0ebccf2eb040d8b8360ddde1796983', external: true },
];

export default function Navigation() {
  return (
    <div className={styles.container} aria-label="Страницы сайта">
      <ul className={styles.list}>
        {pages.map(({ title, url, external }) => (
          <li className={styles.list__item} key={url}>
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
  );
}
