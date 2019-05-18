import React from 'react';
import PropTypes from 'prop-types';

import styles from './footer.module.css';

import Contacts from '../contacts/contacts';

export default function Footer({ site }) {
  const year = (new Date()).getFullYear();

  return (
    <footer className={styles.container}>
      <div>
        <a href="/rss.xml">Подписаться по RSS</a>
      </div>

      <Contacts />

      <span className="small">
        &copy; 2015-
        {year}
        {' '}
        {site.author}
      </span>
    </footer>
  );
}

Footer.propTypes = {
  site: PropTypes.shape({
    author: PropTypes.string.isRequired,
  }).isRequired,
};