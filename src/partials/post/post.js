/* eslint-disable react/no-danger */

import React, { useMemo } from 'react';
import cx from 'classnames';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import 'prismjs/themes/prism-tomorrow.css';

import './fonts/FiraCode/index.css';
import styles from './post.module.css';

export default function Post({
  title, date, preview, content,
}) {
  const created = useMemo(() => (new Date(date)).toUTCString(), [date]);
  const html = useMemo(() => (
    content.replace(/(<code.*\sclass=".*\s?)language-text(.*".*>)/ig, '$1$2')
  ), [content]);

  return (
    <article className={styles.post} itemScope itemType="http://schema.org/BlogPosting">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <header>
        <time dateTime={created} itemProp="datePublished">{date}</time>

        <h1 className={cx('h1', styles.title)} itemProp="name headline">{title}</h1>
      </header>

      <main itemProp="articleBody">
        {preview}

        <div dangerouslySetInnerHTML={{ __html: html }} />
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
