import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../../block/header/index';
import Footer from '../../block/footer/index';
import avatar from '../../block/logo/images/avatar.jpg';

// TODO: move requires fonts in CSS
import '../../../design-system/assets/fonts/FiraCode/fira_code.css';
import '../../../design-system/styles/main.css';

function BaseLayout({
  children, location, title, data,
}) {
  const meta = data.site.siteMetadata;
  const pageTitle = title || meta.title;

  return (
    <>
      <Helmet>
        <html lang={meta.lang} />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content={meta.themeColor} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{pageTitle}</title>
        <meta name="description" content={meta.description} />

        <link rel="canonical" href={meta.siteUrl} />

        <meta property="og:url" content={meta.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${avatar}?s=280`} />
        <meta property="og:image:width" content="280" />
        <meta property="og:image:height" content="280" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:locale" content={meta.lang} />
        <meta property="og:site_name" content={meta.author} />
        <meta property="og:description" content={meta.description} />

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
              description
              themeColor
            }
          }
        }
      `}
      render={data => <BaseLayout {...props} data={data} />}
    />
  );
}
