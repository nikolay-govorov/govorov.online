import React from 'react';

import Layout from '../components/layouts/base';
import SectionQuery from "../components/utils/section-query";
import ContentList from "../components/partials/content-list";

export default function Notes() {
  return (
    <Layout>
      <SectionQuery section="notes">
        {(list) => <ContentList title="Заметки" items={list} />}
      </SectionQuery>
    </Layout>
  );
}
