import React  from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from "gatsby";

import Header from '../partials/header/index';
import Footer from '../partials/footer/index';
import YandexMetrika from '../partials/yandex-metrika/index';

// TODO: move requires fonts in CSS
import '../../design-system/assets/fonts/FiraCode/fira_code.css';
import '../../design-system/main.css';

function BaseLayout({ children, data }) {
  return (
    <>
      {/* Setup head */}
      <Helmet
        htmlAttributes={{ lang: 'ru' }}
      />

      <div className="page">
        <div className="page__header">
          <Header site={data.site.siteMetadata} />
        </div>

        <div className="page__content">
          {children}
        </div>

        <div className="page__footer">
          <Footer site={data.site.siteMetadata} />
        </div>

        <YandexMetrika />
      </div>
    </>
  )
}

export default function (props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              author
              avatar
              yandexVerificationCode
            }
          }
        }
      `}
      render={(data) => <BaseLayout {...props} data={data} />}
    />
  );
}
