---
layout: compress
---

<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: 'en' }}">
  {% include head.html %} 

  <body class="page">
    <div class="page__header">
      {% include header/header.html %}
    </div>

    <main class="page__content">{{ content }}</main>

    <div class="page__footer">
      {% include footer/footer.html %}
    </div>

    {% include yandex-metrika/yandex-metrika.html %}    
  </body>
</html>
