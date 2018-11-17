import React from 'react';
import { Link } from 'gatsby'

function prepareNotesList (list) {
  const postsByYears = list.reduce((acc, note) => {
    const year = note.frontmatter.date;

    if (!acc[year]) {
      acc[year] = [];
    }

    acc[year].push(note);

    return acc;
  }, {});

  return Object.keys(postsByYears).sort((a, b) => a > b ? -1 : 1).map(year => ({ year, notes: postsByYears[year] }));
}

export default function NotesList({ list }) {
  const items = prepareNotesList(list);

  return (
    <div className="notes">
      <h1 className="visuallyhidden">Заметки</h1>

      {list.length === 0 ? (
        <p className="h2">
          Ещё ничего не написано
        </p>
      ) : null}

      {items.map(({ year, notes }) => (
        <section key={year} className="notes__section">
          <a name={year} className="visuallyhidden" aria-hidden="true" />

          <h2 className="h2 notes__section-title">
            <a className="link link--wide link--clean" href={`#${year}`}>{year}</a>
          </h2>

          <ul className="notes__list">
            {notes.map((post) => (
              <li key={post.frontmatter.title} className="notes__item">
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
