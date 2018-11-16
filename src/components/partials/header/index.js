import React from 'react';
import { withPrefix }from 'gatsby';

import Navigation from '../navigation/index';

export default function Header({ site }) {
  const url = ''; // withPrefix(location.pathname);

  return (
    <header className="header">
      <picture>
        <img className="header__avatar" src={`${site.avatar}?s=120`} alt="Фото Николая Говорова" />
      </picture>

      <div className="header__content">
        {url === '/' ? (
          <h1 className="header__logo">
            {site.title}
          </h1>
        ) : (
          <p className="header__logo">
            {site.title}
          </p>
        )}

        <Navigation />
      </div>
    </header>
  );
}
