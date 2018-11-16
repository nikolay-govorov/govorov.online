import React from 'react';
import cx from 'classnames';
import { Link } from "gatsby";

const pages = [
  { title: ' Обо мне ', url: '/' },
  { title: ' Заметки ', url: '/notes' },
  { title: ' Доклады ', url: '/presentations' },
];

export default function Navigation({ vertical }) {
  return (
    <nav className={cx('navigation', { 'navigation--vertical': vertical })} aria-label="Страницы сайта">
      <ul className="navigation__list">
        {pages.map(({ title, url }) => (
          <li key={url} className="navigation__item">
            <Link
              to={url}
              className={cx('link', { 'link--inverted': vertical })}
              activeClassName={'active'}
            >{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
