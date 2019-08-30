import React from 'react';

import Layout from '../blocks/layout/layout';
import Introduction from '../blocks/introduction/introduction';

export default function IndexPage(props) {
  return (
    <Layout {...props} title="Обо мне">
      <Introduction />
    </Layout>
  );
}
