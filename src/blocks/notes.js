/* eslint-disable react/no-danger */

import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from './layout/layout';
import Post from './post/post';

export default function Note({
  data: {
    markdownRemark: { frontmatter: meta, html },
  },
  ...props
}) {
  return (
    <Layout {...props} title={meta.title}>
      <Post
        title={meta.title}
        date={meta.date}
        content={html}
      />
    </Layout>
  );
}

Note.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      id: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,

      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};


export const pageQuery = graphql`
  query NoteBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;
