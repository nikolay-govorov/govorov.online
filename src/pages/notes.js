import React from 'react';

import SectionQuery from '../components/utils/section-query';
import ContentList from '../components/partials/content-list';

export default function NotesPage() {
  return (
    <SectionQuery section="notes">
      {list => <ContentList title="Заметки" items={list} />}
    </SectionQuery>
  );
}
