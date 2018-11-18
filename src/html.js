/* eslint-disable react/require-default-props, react/forbid-prop-types, react/no-danger */
/* eslint-disable react/destructuring-assignment, jsx-a11y/html-has-lang */

import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        {/* Yandex.Metrika counter */}
        <script
          dangerouslySetInnerHTML={{
            __html: '(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter46619496 = new Ya.Metrika({ id:46619496, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");',
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: '<div><img src="https://mc.yandex.ru/watch/46619496" style="position:absolute; left:-9999px;" alt="" /></div>',
          }}
        />
        {/* /Yandex.Metrika counter */}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
