import React from 'react';

import Layout from '../partials/layout/layout';
import ContentList from '../partials/content-list/content-list';

export default function NotesPage(props) {
  return (
    <Layout {...props} title="Заметки">
      <ContentList section="notes" title="Заметки" />
    </Layout>
  );
}
