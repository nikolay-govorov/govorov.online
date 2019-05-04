import React from 'react';

import SectionQuery from '../partials/section-query';
import ContentList from '../partials/content-list';

export default function PresentationsPage() {
  return (
    <SectionQuery section="presentations">
      {list => <ContentList title="Доклады" items={list} />}
    </SectionQuery>
  );
}
