import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';

import styles from './header.module.css';

import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';

export default function Header({ site, url }) {
  const localUrl = withPrefix(url);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.navigation}>
        {localUrl === '/' ? (
          <h1 className={styles.title}>
            {site.title}
          </h1>
        ) : (
          <p className={styles.title}>
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
  }).isRequired,
};
