import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { Container, List, Item } from './styled';

function Contacts({ contacts }) {
  return (
    <Container>
      <List>
        {contacts.map(contact => (
          <Item key={contact.url}>
            <a rel="me" href={contact.url}>{contact.title}</a>
          </Item>
        ))}
      </List>
    </Container>
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
