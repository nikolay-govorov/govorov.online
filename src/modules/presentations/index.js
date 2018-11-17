import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../../components/layouts/base/index';

export default function Presentation({ data: { site, markdownRemark: presentation } }) {
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

export const pageQuery = graphql`
  query PresentationBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      frontmatter {
        name
        title
        video
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;
