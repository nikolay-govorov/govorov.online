import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Post from '../../partials/post/index';
import Video from '../../partials/video/index';

export default function Presentation({
  data: {
    markdownRemark: { frontmatter: meta, html },
  },
}) {
  const slides = `https://nikolay-govorov.github.io/presentation__${meta.name}/#`;

  return (
    <Post
      title={meta.title}
      date={meta.date}
      preview={(
        <>
          <div className="paragraph">
            <a target="_blank" rel="noopener noreferrer" href={slides}>Слайды</a>
          </div>

          <Video
            url={meta.video}
            title={meta.title}
          />
        </>
      )}
      content={html}
    />
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
      html
      frontmatter {
        name
        title
        video
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;
