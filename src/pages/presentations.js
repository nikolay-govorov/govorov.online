import React from 'react';

import Layout from '../partials/layout/layout';
import ContentList from '../partials/content-list/content-list';

export default function PresentationsPage(props) {
  return (
    <Layout {...props} title="Доклады">
      <ContentList section="presentations" title="Доклады" />
    </Layout>
  );
}
