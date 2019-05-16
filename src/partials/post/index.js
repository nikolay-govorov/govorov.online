import React, { useRef, useEffect, useMemo } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

// langs
import 'highlight.js/styles/androidstudio.css';
import hljs from 'highlight.js/lib/highlight';

import langCSS from 'highlight.js/lib/languages/css';
import langHTML from 'highlight.js/lib/languages/xml';
import langJS from 'highlight.js/lib/languages/javascript';

async function installHighlight(container) {
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
  const htmlContainerRef = useRef();
  const created = useMemo(() => (new Date(date)).toUTCString(), [date]);

  useEffect(() => {
    installHighlight(htmlContainerRef.current)
      .catch(() => {}); // Ignore error – this is not important
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

      <main
        itemProp="articleBody"
        ref={htmlContainerRef}
      >
        {preview}

        <div
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
