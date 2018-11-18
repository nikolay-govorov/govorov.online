import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layouts/base';

export default function NotFoundPage({ location }) {
  return (
    <Layout location={location}>
      <h1 className="h1">404</h1>

      <p>Страница не найдена</p>
    </Layout>
  );
}

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired, /* eslint-disable-line react/forbid-prop-types */
};
