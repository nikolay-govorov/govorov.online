import React from 'react';

import Layout from '../partials/layout/layout';
import SectionQuery from '../partials/section-query';
import ContentList from '../partials/content-list/content-list';

export default function NotesPage(props) {
  return (
    <Layout {...props}>
      <SectionQuery section="notes">
        {list => <ContentList title="Заметки" items={list} />}
      </SectionQuery>
    </Layout>
  );
}
