import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layouts/base/index';
import SectionQuery from '../components/utils/section-query';
import ContentList from '../components/partials/content-list';

export default function PresentationsPage({ location }) {
  return (
    <Layout location={location}>
      <SectionQuery section="presentations">
        {list => <ContentList title="Доклады" items={list} />}
      </SectionQuery>
    </Layout>
  );
}

PresentationsPage.propTypes = {
  location: PropTypes.object.isRequired, /* eslint-disable-line react/forbid-prop-types */
};
