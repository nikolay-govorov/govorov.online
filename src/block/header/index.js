import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';

import { Container, styles } from './styled';

import Logo from '../logo/index';
import Navigation from '../navigation/index';

export default function Header({ site, url }) {
  const localUrl = withPrefix(url);

  return (
    <Container>
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
    </Container>
  );
}

Header.propTypes = {
  url: PropTypes.string.isRequired,

  site: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
