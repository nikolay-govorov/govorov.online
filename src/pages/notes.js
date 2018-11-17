import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layouts/base';
import NotesList from '../components/modules/notes/list/index';

function Notes({ notesList }) {
  return (
    <Layout>
      <NotesList list={notesList} />
    </Layout>
  );
}

export default function () {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
              node {
                html
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "YYYY")
                  title
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const list = data.allMarkdownRemark.edges
          .map(({node}) => node)
          .filter((el) => el.fields.slug.startsWith('/notes'));

        return <Notes notesList={list} />
      }}
    />
  );
}
