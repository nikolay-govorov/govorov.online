import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../../partials/header/index';
import Footer from '../../partials/footer/index';
import YandexMetrika from '../../partials/yandex-metrika/index';

// TODO: move requires fonts in CSS
import '../../../design-system/assets/fonts/FiraCode/fira_code.css';
import '../../../design-system/main.css';

import favicon from '../../../assets/logo.png';

function BaseLayout({ children, location, title, data }) {
  const meta = data.site.siteMetadata;
  const pageTitle = title || meta.title;

  return (
    <>
      {/* Setup head */}
      <Helmet>
        <html lang={meta.lang} />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content={meta.themeColor} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{pageTitle}</title>
        <meta name="description" content={meta.description} />

        <link rel="canonical" href={meta.siteUrl} />
        <link rel="icon" type="image/png" href={favicon} />

        <meta property="og:url" content={meta.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${meta.avatar}?s=280`} />
        <meta property="og:image:width" content="280" />
        <meta property="og:image:height" content="280" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:locale" content={meta.lang} />
        <meta property="og:site_name" content={meta.author} />
        <meta property="og:description" content={meta.description} />

        {/* Yandex verification */}
        <meta name="yandex-verification" content={meta.yandexVerificationCode} />

        {/* Disable auto detected phone links */}
        <meta name="format-detection" content="telephone=no" />
        {' '}
        {/* Safari */}
        <meta httpEquiv="x-rim-auto-match" content="none" />
        {' '}
        {/* BlackBerry */}
      </Helmet>

      <div className="page">
        <div className="page__header">
          <Header url={location.pathname} site={meta} />
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
  );
}

export default function (props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              siteUrl
              lang
              title
              author
              avatar
              description
              themeColor
              yandexVerificationCode
            }
          }
        }
      `}
      render={data => <BaseLayout {...props} data={data} />}
    />
  );
}
