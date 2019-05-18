import React from 'react';

import Layout from '../partials/layout/layout';

export default function NotFoundPage(props) {
  return (
    <Layout {...props}>
      <h1 className="h1">404</h1>

      <p>Страница не найдена</p>
    </Layout>
  );
}
