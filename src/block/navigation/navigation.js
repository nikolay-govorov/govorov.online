import React from 'react';
import { Link } from 'gatsby';

import styles from './navigation.module.css';
import ThemeToggler from './theme-toggler/theme-toggler';

const pages = [
  { title: ' Обо мне ', url: '/' },
  { title: ' Заметки ', url: '/notes/' },
  { title: ' Доклады ', url: '/presentations/' },
];

export default function Navigation() {
  return (
    <div className={styles.container} aria-label="Страницы сайта">
      <ul className={styles.list}>
        {pages.map(({ title, url }) => (
          <li className={styles.list__item} key={url}>
            <Link to={url} className="link link--not-visited" activeClassName="link--active">{title}</Link>
          </li>
        ))}
      </ul>

      <ThemeToggler />
    </div>
  );
}
