import React from 'react';
import { Link } from 'gatsby';

import './index.css';

import { prepareNotesList } from './utils';

export default function ContentList({ title, items }) {
  const itemsByYear = prepareNotesList(items);

  return (
    <div className="content-list">
      <h1 className="visuallyhidden">{title}</h1>

      {items.length === 0 ? (
        <p className="h2">
          Ещё ничего не написано
        </p>
      ) : null}

      {itemsByYear.map(({ year, notes }) => (
        <section key={year} className="content-list__section">
          <h2 className="h2 content-list__section-title">
            <a className="link link--wide link--clean" href={`#${year}`}>{year}</a>
          </h2>

          <ul className="content-list__list">
            {notes.map((post) => (
              <li key={post.frontmatter.title} className="content-list__item">
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
