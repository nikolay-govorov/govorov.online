import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../../components/layouts/base/index';

export default function Presentation({ data: { markdownRemark: presentation } }) {
  const meta = presentation.frontmatter;
  const slides = `https://nikolay-govorov.github.io/presentation__${meta.name}/#`;

  return (
    <Layout title={presentation.title}>
      <article className="one-presentation">
        <h2 className="h2">{meta.title}</h2>

        <div className="paragraph">
          <a target="_blank" rel="noopener noreferrer" href={slides}>Слайды</a>
        </div>

        <div className="one-presentation__frame-container">
          <iframe
            className="one-presentation__frame"
            src={meta.video}
            title={meta.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </article>
    </Layout>
  );
}

Presentation.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      id: PropTypes.string.isRequired,

      frontmatter: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        video: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query PresentationBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        name
        title
        video
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;
