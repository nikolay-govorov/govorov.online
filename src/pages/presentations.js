import React from 'react';

import Layout from '../components/layouts/base/index';
import SectionQuery from '../components/utils/section-query';
import ContentList from '../components/partials/content-list';

export default function Presentations() {
  return (
    <Layout>
      <SectionQuery section="presentations">
        {list => <ContentList title="Доклады" items={list} />}
      </SectionQuery>
    </Layout>
  );
}
