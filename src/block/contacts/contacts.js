import React from 'react';

import styles from './contacts.module.css';
import contacts from '../../../data/contacts.json';

export default function Contacts() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {contacts.map(contact => (
          <li className={styles.list__item} key={contact.url}>
            <a rel="me" href={contact.url}>{contact.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
