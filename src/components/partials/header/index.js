import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';

import Navigation from '../navigation/index';

export default function Header({ site, url }) {
  const localUrl = withPrefix(url);

  return (
    <header className="header">
      <picture>
        <img
          width={120}
          className="header__avatar"
          src={`${site.avatar}?s=120`}
          alt="Фото Николая Говорова"
        />
      </picture>

      <div className="header__content">
        {localUrl === '/' ? (
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

Header.propTypes = {
  site: PropTypes.shape({
    title: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
