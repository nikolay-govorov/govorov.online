import React from 'react';

import SectionQuery from '../partials/section-query';
import ContentList from '../partials/content-list';

export default function NotesPage() {
  return (
    <SectionQuery section="notes">
      {list => <ContentList title="Заметки" items={list} />}
    </SectionQuery>
  );
}
