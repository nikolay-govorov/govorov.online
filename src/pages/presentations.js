import React from 'react';

import SectionQuery from '../components/utils/section-query';
import ContentList from '../components/partials/content-list';

export default function PresentationsPage() {
  return (
    <SectionQuery section="presentations">
      {list => <ContentList title="Доклады" items={list} />}
    </SectionQuery>
  );
}
