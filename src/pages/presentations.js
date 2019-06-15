import React from 'react';

import Layout from '../partials/layout/layout';
import SectionQuery from '../partials/section-query';
import ContentList from '../partials/content-list/content-list';

export default function PresentationsPage(props) {
  return (
    <Layout {...props} title="Доклады">
      <h1 className="visuallyhidden">Доклады</h1>

      <SectionQuery section="presentations">
        {list => <ContentList items={list} />}
      </SectionQuery>
    </Layout>
  );
}
