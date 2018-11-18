import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';

import Logo from '../logo/index';
import Navigation from '../navigation/index';

export default function Header({ site, url }) {
  const localUrl = withPrefix(url);

  return (
    <header className="header">
      <Logo />

      <div className="header__content">
        {localUrl === '/' ? (
          <h1 className="header__title">
            {site.title}
          </h1>
        ) : (
          <p className="header__title">
            {site.title}
          </p>
        )}

        <Navigation />
      </div>
    </header>
  );
}

Header.propTypes = {
  url: PropTypes.string.isRequired,

  site: PropTypes.shape({
    title: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
