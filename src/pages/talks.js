import React from 'react';

import Layout from '../blocks/layout/layout';
import ContentList from '../blocks/content-list/content-list';

export default function TalksPage(props) {
  return (
    <Layout {...props} title="Доклады">
      <ContentList section="talks" title="Доклады" />
    </Layout>
  );
}
