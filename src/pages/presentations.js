import React from 'react';

import Layout from '../partials/layout/layout';
import SectionQuery from '../partials/section-query';
import ContentList from '../partials/content-list/content-list';

export default function PresentationsPage(props) {
  return (
    <Layout {...props}>
      <SectionQuery section="presentations">
        {list => <ContentList title="Доклады" items={list} />}
      </SectionQuery>
    </Layout>
  );
}
