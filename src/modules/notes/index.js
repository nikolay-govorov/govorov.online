import { graphql } from 'gatsby';
import React, { Component } from 'react';

import Layout from '../../components/layouts/base/index';

async function installHighlight (container) {
  const [hljs] = await Promise.all([
    import('highlight.js'),
    import('highlight.js/styles/androidstudio.css'),
  ]);

  const codeBlocs = container.querySelectorAll('pre code');

  for (const block of codeBlocs) {
    hljs.highlightBlock(block);
  }
}

export default class Note extends Component {
  componentDidMount() {
    installHighlight(this.htmlContainer)
      .catch(() => {}); // Ignore error – this is not important
  }

  getHTMLContainerRef = (node) => {
    this.htmlContainer = node;
  };

  render() {
    const { data: { markdownRemark: post } } = this.props;

    const meta = post.frontmatter;
    const created = (new Date(meta.date)).toUTCString();

    return (
      <Layout title={meta.title}>
        <article className="article" itemScope itemType="http://schema.org/BlogPosting">
          <header className="article__header">
            <time dateTime={created} itemProp="datePublished">
              {meta.date}
            </time>

            <h1 className="article__title h1" itemProp="name headline">
              {meta.title}
            </h1>
          </header>

          <div itemProp="articleBody" ref={this.getHTMLContainerRef} dangerouslySetInnerHTML={{ __html: post.html }} />

          <div className="article__comments">
            {/*{% include partials/disqus/disqus.html %}*/}
          </div>
        </article>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query NoteBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;
