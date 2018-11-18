import React from 'react';
import { Link } from 'gatsby';

const pages = [
  { title: ' Обо мне ', url: '/' },
  { title: ' Заметки ', url: '/notes/' },
  { title: ' Доклады ', url: '/presentations/' },
];

export default function Navigation() {
  return (
    <nav className="navigation" aria-label="Страницы сайта">
      <ul className="navigation__list">
        {pages.map(({ title, url }) => (
          <li key={url} className="navigation__item">
            <Link to={url} className="link" activeClassName="link--active">{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
