import React from 'react';

import Layout from '../partials/layout/layout';
import Introduction from '../block/introduction/introduction';

export default function IndexPage(props) {
  return (
    <Layout {...props}>
      <Introduction />
    </Layout>
  );
}
