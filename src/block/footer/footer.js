import React, { useMemo } from 'react';

import styles from './footer.module.css';

import meta from '../../../data/meta';

import Contacts from '../contacts/contacts';

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={styles.container}>
      <div>
        <a href="/rss.xml">Подписаться по RSS</a>
      </div>

      <Contacts />

      <span className="small">
        &copy; 2015-
        {year}
        {' '}
        {meta.author.name}
      </span>
    </footer>
  );
}
