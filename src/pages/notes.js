import React from 'react';

import Layout from '../blocks/layout/layout';
import ContentList from '../blocks/content-list/content-list';

export default function NotesPage(props) {
  return (
    <Layout {...props} title="Заметки">
      <ContentList section="notes" title="Заметки" />
    </Layout>
  );
}
