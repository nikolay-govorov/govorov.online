import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Introduction from '../block/introduction/introduction';

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        authorBirthDate
        job {
          name
          url
        }
      }
    }
  }
`;

export default function IndexPage() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Introduction
          site={data.site.siteMetadata}
        />
      )}
    />
  );
}
