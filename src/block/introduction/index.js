import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import avatar from '../logo/images/avatar.jpg';
import { Container, Link as IntroLink } from './styled';

const getCurrentAge = (date) => {
  const secs = 24 * 3600 * 365.25 * 1000;

  /* eslint-disable-next-line no-bitwise */
  return ((new Date().getTime() - new Date(date)) / secs) | 0;
};

const ProjectsList = ({ list, type }) => (
  list
    .filter(el => el.type === type)
    .map(project => (
      <IntroLink key={project.link}><a href={project.link}>{project.title}</a></IntroLink>))
);

export default function Introduction({ site, contacts, projects }) {
  return (
    <Container itemScope itemType="https://schema.org/Person">
      <link itemProp="url" href={site.siteUrl} />
      <meta itemProp="image" content={`${avatar}?s=280`} />
      <meta itemProp="birthDate" content={site.authorBirthDate} />

      {contacts.filter(({ itemprop }) => itemprop).map(contact => (
        <meta key={contact.url} itemProp={contact.itemprop} content={contact.url} />
      ))}

      <p className="paragraph">
        Привет! Меня зовут
        {' '}
        <span itemProp="givenName">Николай</span>
        {' '}
        <span itemProp="familyName">Говоров</span>
.
        Мне
        {' '}
        <span id="age">{getCurrentAge(site.authorBirthDate)}</span>
        {' '}
лет, живу в
        {' '}
        <span className="nobr" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">Санкт-Петербурге</span>
          <meta itemProp="addressCountry" content="Россия" />
        </span>
,
        разрабатываю фронтенд для
        {' '}
        <a href={site.job.url}>{site.job.name}</a>
.
      </p>

      <p className="paragraph">
        С 2015 года разрабатывал интерфейсы на фрилансе, в том числе для
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
        Пробую выступать на
        {' '}
        <Link to="/presentations">митапах</Link>
,
        веду
        {' '}
        <Link to="/notes">блог</Link>
, временами пишу забавные посты
        {' '}
        <a href="https://vk.com/nikolay_govorov" rel="me">ВКонтакте</a>
        {' '}
и
        {' '}
        <a href="https://twitter.com/govorov_n" rel="me">Твитере</a>
.
      </p>
    </Container>
  );
}

Introduction.propTypes = {
  site: PropTypes.shape({
    siteUrl: PropTypes.string.isRequired,
    authorBirthDate: PropTypes.string.isRequired,
    job: PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

  contacts: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    itemprop: PropTypes.string,
  })).isRequired,

  projects: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};