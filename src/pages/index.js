import React from 'react';
import cx from 'classnames';

import Layout from '../blocks/layout/layout';
import avatar from '../images/avatar.jpg';
import meta from '../../metadata.json';

import styles from './index.module.css';

const getCurrentAge = (date) => {
  const secs = 24 * 3600 * 365.25 * 1000;

  return ((new Date().getTime() - new Date(date)) / secs) | 0;
};

function LinksList({ list, separator, upcomingClassName }) {
  return list.map((project, index, { length }) => (
    <span className="nobr">
      <a
        key={project.url}
        href={project.url}
        className={cx(styles.intro_link, { [upcomingClassName]: index !== length - 1 })}
      >
        {project.name}
      </a>

      {index !== length - 1 ? separator : null}
    </span>
  ));
}

export default function IndexPage(props) {
  return (
    <Layout {...props} title="Обо мне">
      <div className={styles.intro_container} itemScope itemType="https://schema.org/Person">
        <link itemProp="url" href={meta.site.url} />
        <meta itemProp="image" content={avatar} />
        <meta itemProp="gender" content="male" />
        <meta itemProp="birthDate" content={meta.author.birthDate} />

        {meta.author.contacts.filter(({ itemprop }) => itemprop).map(contact => (
          <meta key={contact.url} itemProp={contact.itemprop} content={contact.url} />
        ))}

        <p className="paragraph">
          Привет. Меня зовут <span itemProp="givenName">Николай</span> <span itemProp="familyName">Говоров</span>.
          Мне <span id="age">{getCurrentAge(meta.author.birthDate)}</span>, живу в
          {' '}
          <span className="nobr" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressLocality">Санкт-Петербурге</span>
            <meta itemProp="addressCountry" content="Россия" />
          </span>, разрабатываю фронтенд в <LinksList list={meta.author.jobs} separator="&nbsp;→ " upcomingClassName={cx('link', 'link--through')} />.
        </p>

        <p className="paragraph">С 2014 года разрабатывал интерфейсы на фрилансе.</p>

        <p className="paragraph">Разрабатываю open-source проекты, поддерживаю <LinksList list={meta.author.projects.filter(el => el.type === "opensource")} separator=", " />.</p>

        <p className="paragraph">Выступаю на митапах, пишу в <a href="https://twitter.com/govorov_n" rel="me">Твитер</a>.</p>
      </div>
    </Layout>
  );
}
