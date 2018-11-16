import React from 'react';
import { StaticQuery, graphql } from "gatsby";

function Contacts({ data: { contacts } }) {
  return (
    <div className="contacts">
      <ul className="contacts__list">
        {contacts.map((contact) => (
          <li className="contacts_item" key={contact.url}>
            <a className="contacts_link" rel="me" href={contact.url}>{contact.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function (props) {
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
      render={(data) => <Contacts data={{
        contacts: data.allContactsYaml.edges.map(({ node }) => node)
      }} />}
    />
  );
}
