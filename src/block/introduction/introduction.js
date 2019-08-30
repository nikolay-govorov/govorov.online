import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'gatsby';

import avatar from '../../assets/images/avatar.jpg';
import styles from './introduction.module.css';

import meta from '../../../data/meta.json';
import contacts from '../../../data/contacts.json';
import projects from '../../../data/projects.json';

const getCurrentAge = (date) => {
  const secs = 24 * 3600 * 365.25 * 1000;

  /* eslint-disable-next-line no-bitwise */
  return ((new Date().getTime() - new Date(date)) / secs) | 0;
};

function LinksList({ list, separator, upcomingClassName }) {
  return list.map((project, index, { length }) => (
    <span className="nobr">
      <a
        key={project.url}
        href={project.url}
        className={cx(styles.link, { [upcomingClassName]: index !== length - 1 })}
      >
        {project.name}
      </a>

      {index !== length - 1 ? separator : null}
    </span>
  ));
}

function JobsList({ list }) {
  return (
    <LinksList
      list={list}
      separator="&nbsp;→ "
      upcomingClassName={cx('link', 'link--through')}
    />
  );
}

JobsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

function ProjectsList({ list, type }) {
  return (
    <LinksList
      list={list.filter(el => el.type === type)}
      separator=", "
    />
  );
}

ProjectsList.propTypes = {
  type: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
};

export default function Introduction() {
  return (
    <div className={styles.container} itemScope itemType="https://schema.org/Person">
      <link itemProp="url" href={meta.site.url} />
      <meta itemProp="image" content={avatar} />
      <meta itemProp="gender" content="male" />
      <meta itemProp="birthDate" content={meta.author.birthDate} />

      {contacts.filter(({ itemprop }) => itemprop).map(contact => (
        <meta key={contact.url} itemProp={contact.itemprop} content={contact.url} />
      ))}

      <p className="paragraph">
        Привет. Меня зовут
        {' '}
        <span itemProp="givenName">Николай</span>
        {' '}
        <span itemProp="familyName">Говоров</span>
. Мне
        {' '}
        <span id="age">{getCurrentAge(meta.author.birthDate)}</span>
, живу в
        {' '}
        <span className="nobr" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">Санкт-Петербурге</span>
          <meta itemProp="addressCountry" content="Россия" />
        </span>
, разрабатываю фронтенд в
        {' '}
        <JobsList list={meta.author.jobs} />
.
      </p>

      <p className="paragraph">
        С 2014 года разрабатывал интерфейсы на фрилансе, в том числе для
        {' '}
        <ProjectsList list={projects} type="job" />
.
      </p>

      <p className="paragraph">
        Разрабатываю open-source проекты, поддерживаю
        {' '}
        <ProjectsList list={projects} type="opensource" />
.
      </p>

      <p className="paragraph">
        Выступаю на
        {' '}
        <Link to="/talks">митапах</Link>
,
        веду
        {' '}
        <Link to="/notes">блог</Link>
, пишу забавные посты в
        {' '}
        <a href="https://twitter.com/govorov_n" rel="me">Твитере</a>
        {' '}
и
        {' '}
        <a href="https://vk.com/nikolay_govorov" rel="me">ВКонтакте</a>
.
      </p>
    </div>
  );
}
