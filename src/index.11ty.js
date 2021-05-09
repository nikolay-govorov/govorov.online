function LinksList({ list, separator, upcomingClass = "" }) {
  return list.map((project, index, { length }) => `
    <span class="nobr"><a href="${project.url}" class="intro_link ${index !== length - 1 ? upcomingClass : ''}">${project.name}</a>${index !== length - 1 ? separator : ""}</span>`).join("");
}

const meta = require('../metadata.json');

const getCurrentAge = (date) => {
  const secs = (24 * 3600 * 365.25 * 1000);

  return ((new Date().getTime() - new Date(date)) / secs) | 0;
};

exports.data = {
  layout: "layout.11ty.js",
  title: "Обо мне",
};

exports.render = () => {
  const avatar = '/images/avatar.jpg';

  return `
    <div class="intro_container" itemScope itemType="https://schema.org/Person">
      <link itemProp="url" href="${meta.site.url}" />
      <meta itemProp="image" content="${avatar}" />
      <meta itemProp="gender" content="male" />
      <meta itemProp="birthDate" content="${meta.author.birthDate}" />

      ${meta.author.contacts.filter(({ itemprop }) => itemprop).map(contact => `
        <meta key="${contact.url}" itemProp="${contact.itemprop}" content="${contact.url}" />
      `).join("")}

      <p class="paragraph">
        Привет.

        Меня зовут <span itemProp="givenName">Николай</span> <span itemProp="familyName">Говоров</span>.

        Мне <span id="age">${getCurrentAge(meta.author.birthDate)}</span>, живу в
        <span class="nobr" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <meta itemProp="addressCountry" content="Россия" />
          <span itemProp="addressLocality">Санкт-Петербурге</span></span>, разрабатываю фронтенд в

        ${LinksList({ list: meta.author.jobs, separator: "&nbsp;→ ", upcomingClass: 'link link--through' })}.
      </p>

      <p class="paragraph">Разрабатываю open-source, поддерживаю ${LinksList({ list: meta.author.projects, separator: ", " })}.</p>
    </div>
  `;
}
