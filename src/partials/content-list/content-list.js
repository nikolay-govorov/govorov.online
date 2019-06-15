import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './content-list.module.css';

import { prepareNotesList } from './utils';

export default function ContentList({ items }) {
  const itemsByYear = prepareNotesList(items);

  return (
    <div>
      {items.length === 0 ? (
        <p className="h2">
          Ещё ничего не написано
        </p>
      ) : null}

      {itemsByYear.map(({ year, notes }) => (
        <section key={year} className={styles.section}>
          <h2 className={cx('h2', styles.sectionTitle)}>
            <a className={cx('link', 'link--wide', 'link--clean', styles.title)} href={`#${year}`}>{year}</a>
          </h2>

          <ul className={styles.list}>
            {notes.map(post => (
              <li key={post.frontmatter.title} className={styles.listItem}>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

ContentList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    html: PropTypes.string.isRequired,

    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,

    frontmatter: PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};
