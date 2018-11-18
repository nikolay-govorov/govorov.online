import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/partials/layout/index';
import SectionQuery from '../components/utils/section-query';
import ContentList from '../components/partials/content-list';

export default function NotesPage({ location }) {
  return (
    <Layout location={location}>
      <SectionQuery section="notes">
        {list => <ContentList title="Заметки" items={list} />}
      </SectionQuery>
    </Layout>
  );
}

NotesPage.propTypes = {
  location: PropTypes.object.isRequired, /* eslint-disable-line react/forbid-prop-types */
};
