import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';

import styles from './header.module.css';
import meta from '../../../metadata.json';

import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';

export default function Header({ url }) {
  const localUrl = withPrefix(url);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.navigation}>
        {localUrl === '/' ? (
          <h1 className={styles.title}>
            {meta.site.name}
          </h1>
        ) : (
          <p className={styles.title}>
            {meta.site.name}
          </p>
        )}

        <Navigation />
      </div>
    </header>
  );
}

Header.propTypes = {
  url: PropTypes.string.isRequired,
};
