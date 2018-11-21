---
layout: compress
---

<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: 'en' }}">
  {% include partials/head.html %} 

  <body class="page">
    <div class="page__header">
      {% include partials/header/header.html %}
    </div>

    <main class="page__content">{{ content }}</main>

    <div class="page__footer">
      {% include partials/footer/footer.html %}
    </div>
  </body>
</html>
