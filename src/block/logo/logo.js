import React from 'react';
import cx from 'classnames';

import avatarJPG from '../../assets/images/avatar.jpg';
import avatarWEBP from '../../assets/images/avatar.webp';
import avatarFull from '../../assets/images/nikolay_govorov.jpg';

import styles from './logo.module.css';

const SIZE = 80;

export default function Logo() {
  return (
    <a
      className={cx('link--clean', styles.link)}
      href={avatarFull}
      rel="nofollow noopener noreferrer"
      target="_blank"
    >
      <picture className={styles.avatar}>
        <source srcSet={avatarWEBP} type="image/webp" />

        <img
          className={styles.avatar}
          src={avatarJPG}
          alt="Фото Николая Говорова"
          width={SIZE}
          height={SIZE}
        />
      </picture>
    </a>
  );
}
