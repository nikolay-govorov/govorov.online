import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled';
import Contacts from '../contacts/index';

export default function Footer({ site }) {
  const year = (new Date()).getFullYear();

  return (
    <Container>
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
    </Container>
  );
}

Footer.propTypes = {
  site: PropTypes.shape({
    author: PropTypes.string.isRequired,
  }).isRequired,
};
