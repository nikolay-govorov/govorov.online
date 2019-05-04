import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
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
`;

export default function SectionQuery({ children, section }) {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const list = data.allMarkdownRemark.edges
          .map(({ node }) => node)
          .filter(el => el.fields.slug.startsWith(`/${section}`));

        return children(list);
      }}
    />
  );
}

SectionQuery.propTypes = {
  children: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
};
