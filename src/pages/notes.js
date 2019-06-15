import React from 'react';

import Layout from '../partials/layout/layout';
import SectionQuery from '../partials/section-query';
import ContentList from '../partials/content-list/content-list';

export default function NotesPage(props) {
  return (
    <Layout {...props} title="Заметки">
      <h1 className="visuallyhidden">Заметки</h1>

      <SectionQuery section="notes">
        {list => <ContentList items={list} />}
      </SectionQuery>
    </Layout>
  );
}
