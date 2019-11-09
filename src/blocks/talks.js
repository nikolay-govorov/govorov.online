import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Post from './post/post';
import Video from './video/video';
import Layout from './layout/layout';

export default function Talk({
  data: {
    markdownRemark: { frontmatter: meta, html },
  },
  ...props
}) {
  const slides = `https://nikolay-govorov.github.io/talk__${meta.slides_id}/#`;

  return (
    <Layout {...props} title={meta.title}>
      <Post
        title={meta.title}
        date={meta.date}
        preview={(
          <>
            <div className="paragraph">
              <a target="_blank" rel="noopener noreferrer" href={slides}>Слайды</a>
            </div>

            {meta.video ? (
              <Video
                url={meta.video}
                title={meta.title}
              />
            ) : null}
          </>
        )}
        content={html}
      />
    </Layout>
  );
}

Talk.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      id: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,

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
  query TalkBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        video
        slides_id
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;
