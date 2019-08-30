import React from 'react';

import Layout from '../partials/layout/layout';
import ContentList from '../partials/content-list/content-list';

export default function TalksPage(props) {
  return (
    <Layout {...props} title="Доклады">
      <ContentList section="talks" title="Доклады" />
    </Layout>
  );
}
