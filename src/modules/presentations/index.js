import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Video from '../../components/partials/Video/index';

export default function Presentation({ data: { markdownRemark: presentation } }) {
  const meta = presentation.frontmatter;
  const slides = `https://nikolay-govorov.github.io/presentation__${meta.name}/#`;

  return (
    <article className="one-presentation">
      <Helmet>
        <title>{presentation.title}</title>
      </Helmet>

      <h2 className="h2">{meta.title}</h2>

      <div className="paragraph">
        <a target="_blank" rel="noopener noreferrer" href={slides}>Слайды</a>
      </div>

      <Video
        url={meta.video}
        title={meta.title}
      />
    </article>
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
