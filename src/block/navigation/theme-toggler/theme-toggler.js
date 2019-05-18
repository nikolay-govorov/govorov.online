/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */

import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import styles from './theme-toggler.module.css';
import {
  THEME_LIGHT, THEME_DARK, detectActualTheme, toggleTheme,
} from './utils';

const INPUT_ID = 'toggler';

toggleTheme(detectActualTheme());

export default function ThemeToggler() {
  const [theme, set] = useState(detectActualTheme());

  useEffect(() => toggleTheme(theme), [theme]);

  useEffect(() => {
    set(detectActualTheme());
  }, []);

  return (
    <div className={styles.container}>
      <label
        htmlFor={INPUT_ID}
        className={cx(styles.icon, styles.sun)}
        aria-hidden
      />

      <input
        className={styles.input}
        id={INPUT_ID}
        type="checkbox"
        aria-label="Переключить тему"
        checked={theme === THEME_DARK}
        onChange={({ target }) => set(target.checked ? THEME_DARK : THEME_LIGHT)}
      />
      <label
        className={styles.label}
        htmlFor={INPUT_ID}
        aria-hidden
      />

      <label
        htmlFor={INPUT_ID}
        className={cx(styles.icon, styles.crescent)}
        aria-hidden
      />
    </div>
  );
}
