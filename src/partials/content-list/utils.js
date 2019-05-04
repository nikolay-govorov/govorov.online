/* eslint-disable-next-line import/prefer-default-export */
export function prepareNotesList(list) {
  const postsByYears = list.reduce((acc, note) => {
    const year = note.frontmatter.date;

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
