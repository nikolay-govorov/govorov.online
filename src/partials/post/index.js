/* eslint-disable react/no-danger */

import React, { useRef, useEffect, useMemo } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { isSaveData } from '../../lib';

import './fonts/FiraCode/index.css';

async function installHighlight(container) {
  if (isSaveData()) {
    return;
  }

  await import('highlight.js/styles/androidstudio.css');

  const [
    { default: hljs },
    { default: langCSS },
    { default: langHTML },
    { default: langJS },
  ] = await Promise.all([
    import('highlight.js/lib/highlight'),

    import('highlight.js/lib/languages/css'),
    import('highlight.js/lib/languages/xml'),
    import('highlight.js/lib/languages/javascript'),
  ]);

  hljs.registerLanguage('css', langCSS);
  hljs.registerLanguage('html', langHTML);
  hljs.registerLanguage('javascript', langJS);

  const codeBlocs = container.querySelectorAll('pre code');

  codeBlocs.forEach((block) => {
    hljs.highlightBlock(block);
  });
}

export default function Post({
  title, date, preview, content,
}) {
  const htmlContainerRef = useRef(null);
  const created = useMemo(() => (new Date(date)).toUTCString(), [date]);

  useEffect(() => {
    const container = htmlContainerRef.current;

    if (container) {
      installHighlight(htmlContainerRef.current)
        .catch(() => {}); // Ignore error – this is not important
    }
  }, [content]);

  return (
    <article className="post" itemScope itemType="http://schema.org/BlogPosting">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <header className="post__header">
        <time dateTime={created} itemProp="datePublished">{date}</time>

        <h1 className="post__title h1" itemProp="name headline">{title}</h1>
      </header>

      <main itemProp="articleBody">
        {preview}

        <div
          ref={htmlContainerRef}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    </article>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  preview: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
};

Post.defaultProps = {
  preview: null,
};
