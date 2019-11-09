import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';

import styles from './content-list.module.css';

function prepareNotesList(list) {
  const postsByYears = list.reduce((acc, note) => {
    const year = new Date(note.date).getFullYear();

    if (!acc[year]) {
      acc[year] = [];
    }

    acc[year].push(note);

    return acc;
  }, {});

  return Object.keys(postsByYears)
    .sort((a, b) => (a > b ? -1 : 1))
    .map(year => ({ year, notes: postsByYears[year] }));
}

function formatQuery(data, section) {
  return data.allMarkdownRemark.edges
    .reduce((list, { node: item }) => {
      if (item.fields.slug.startsWith(`/${section}`)) {
        list.push({
          slug: item.fields.slug,
          date: item.frontmatter.date,
          title: item.frontmatter.title,
        });
      }

      return list;
    }, []);
}

function filterFuture(items) {
  return items.filter(item => new Date(item.date).getTime() < Date.now());
}

function ContentList({ items }) {
  const itemsByYear = prepareNotesList(filterFuture(items));

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
              <li key={post.title} className={styles.listItem}>
                <Link to={post.slug}>{post.title}</Link>
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
    slug: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default function List({ title, section }) {
  return (
    <>
      <h1 className="visuallyhidden">{title}</h1>

      <StaticQuery
        query={graphql`query {
          allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
              node {
                fields { slug }
                frontmatter {
                  title
                  date(formatString: "YYYY-MM-DD")
                }
              }
            }
          }
        }`}
        render={data => (
          <ContentList items={formatQuery(data, section)} />
        )}
      />
    </>
  );
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
};
