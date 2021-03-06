---
title: Как упростить подключение модулей используя алиасы в Webpack
date: 2018-07-12
---

Когда фронтенд растёт и структура проекта усложняется,
в коде часто появляются записи такого вида:

```js
import refresh from '../../../../../shared/libs/common/refresh.js';
import ajax from '../../../../utils/web/ajax.js';
``` 

На практике оказалось, что такой код тяжело читать и поддерживать, он
подвержен ошибкам и опечаткам. Когда я решаю перенести всего один файл нужно править все пути в нём.

Для решения этой проблемы в `NodeJS` можно добавлять папки в
переменную окружения `NODE_PATH`, а в сборщиках существует возможно задать алиасы для путей.
Алиас в этом случае – это строка-префикс для пути, по которому подключается модуль.

Допустим, есть некоторая развесистая структура:

```text
src
├── static
│   └── ...
│
├── palette
│   ├── Button
│   ├── Title
│   └── ...
│
├── core
│   ├── store
│   ├── modules
│   ├── actions
│   ├── accessors
│   └── ...
│
└── app
    ├── shared
    │   ├── api
    │   ├── utils
    │   └── components
    │  
    ├── modile
    │   ├── libs
    │   ├── components
    │   │
    │   └── entry.js
    │
    └── web
        ├── libs
        ├── components
        │
        └── entry.js
```

Мне нравится задавать для всего проекта как минимум корневой алиас,
чаще всего `/` так как очевидно, что `src` для этого проекта является корневой папкой
(чаще всего это дериктория в которую указывает `webpack.context`).

Бывает удобно добавить ещё алиас для домашней папки (он часто совпадает с корневым),
который логично назвать `~`. В моём примере домашней папкой будет `src/app`.

Если есть отдельная палитра, приходится очень часто что-то оттуда брать,
поэтому мне удобно ставить ещё один алиас (например `#`) в корень плаитры.

>>
  **Багло!** Стоит быть аккуратным с алиасами – если они конфликтуют 
  с классическими путями, то алиас перевесит. Например, популярно делать алиасы,
  с именами папок в корне, начинающиеся с `@`, Например `@modules` или
  `@utils`. Здесь всё хорошо пока нет подключений npm модулей из npm-namespaces. 
  В таком случае поставить и подключить `@utils/deep_equal` пакет не получится,
  ведь в папке `src/utils` нет файла `deep_equal.js` <span class="emoji">🙂</span>

В Webpack алиасы можно задать в блоке `resolve.alias`:

```js
module.exports = {
  context: path.resolve('src'),

  resolve: {
    alias: {
      "/": path.resolve("src"),
      "~": path.resolve("src", "apps"),
      "#": path.resolve("src", "palette")
    }
  }
};
```

С этого момента в коде мы можем подключать модули начиная с алиасов, например: 

```js
/* Корневой алиас */
import loadPosts from '/core/actions/load_posts';

/* Палитра */
import Button from '#/Button/';

/* Модули */
import WebFooter from '~/web/components/Footer/';
import MobileFooter from '~/mobile/components/Footer/';
```

Это небольшое изменение сильно упростило код –
даже мимолётного взгляда на импорт достаточно чтобы понять где лежит файл. 
Как бонус, существенно упрощается рефакторинг, ведь при переносе файла,
его внутренние импорты не изменились, а импорты самого файла легко ищутся поиском,
ведь они везде одинаковые.

>>
  Замечу, что когда я это настраивал выяснилось
  что не все IDE могут правильно подсвечивать пути с алиасами. **Но WebStorm, разумеется, может.**

Подробнее о настройке можно читать в [документации Webpack](https://webpack.js.org/configuration/resolve/#resolve-alias).
