import React from 'react';

export default function YandexMetrika() {
  return (
    <>
      <script type="text/javascript" dangerouslySetInnerHTML={{ __html: '(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter46619496 = new Ya.Metrika({ id:46619496, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");' }} />

      <noscript>
        <div><img src="https://mc.yandex.ru/watch/46619496" style="position:absolute; left:-9999px;" alt="" /></div>
      </noscript>
    </>
  )
}
