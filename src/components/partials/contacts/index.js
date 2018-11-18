import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

function Contacts({ contacts }) {
  return (
    <div className="contacts">
      <ul className="contacts__list">
        {contacts.map(contact => (
          <li className="contacts_item" key={contact.url}>
            <a className="contacts_link" rel="me" href={contact.url}>{contact.title}</a>
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
