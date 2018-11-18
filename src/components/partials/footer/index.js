import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Contacts from '../contacts/index';
import Navigation from '../navigation/index';

export default function Footer({ site }) {
  const year = (new Date()).getFullYear();

  return (
    <footer className="footer">
      <div className="footer__nav">
        <Navigation vertical />
      </div>

      <div>
        <Link to="/rss.xml">Подписаться по RSS</Link>
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
