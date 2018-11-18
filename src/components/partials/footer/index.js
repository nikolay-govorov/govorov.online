import React from 'react';
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
        <a href="{{ '/feed.xml' | absolute_url }}">Подписаться по RSS</a>
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
