import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import styles from './contacts.module.css';

function Contacts({ contacts }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {contacts.map(contact => (
          <li className={styles.list__item} key={contact.url}>
            <a rel="me" href={contact.url}>{contact.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default function () {
  return (
    <StaticQuery
      query={graphql`
        query {
          allContactsYaml {
            edges {
              node {
                title
                url
              }
            }
          }
        }
      `}
      render={data => (
        <Contacts contacts={data.allContactsYaml.edges.map(({ node }) => node)} />
      )}
    />
  );
}
