---
layout: compress
---

<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: 'en' }}">
  {% include head.html %} 

  <body class="page">
    <main class="page__content">{{ content }}</main>

    <div class="page__footer">
      {% include footer/footer.html %}
    </footer>

    {% include yandex-metrika/yandex-metrika.html %}    
  </body>
</html>
