import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/partials/layout/index';
import Introduction from '../components/block/introduction/index';

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
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

export default function IndexPage({ location }) {
  return (
    <Layout location={location}>
      <StaticQuery
        query={query}
        render={data => (
          <Introduction
            site={data.site.siteMetadata}
            contacts={data.allContactsYaml.edges.map(({ node }) => node)}
            projects={data.allProjectsYaml.edges.map(({ node }) => node)}
          />
        )}
      />
    </Layout>
  );
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired, /* eslint-disable-line react/forbid-prop-types */
};
