import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layouts/base/index';
import Introduction from '../components/partials/introduction/index';

const query = graphql`
  query {
    site {
      siteMetadata {
        url
        avatar
        authorBirthDate
        job {
          name
          url
        }
      }
    }

    allProjectsYaml {
      edges {
        node {
          link
          title
          type
        }
      }
    }

    allContactsYaml {
      edges {
        node {
          title
          url
          itemprop
        }
      }
    }
  }
`;

export default function IndexPage() {
  return (
    <Layout>
      <StaticQuery
        query={query}
        render={(data) => <Introduction
          site={data.site.siteMetadata}
          contacts={data.allContactsYaml.edges.map(({ node }) => node)}
          projects={data.allProjectsYaml.edges.map(({ node }) => node)}
        />}
      />
    </Layout>
  );
}
