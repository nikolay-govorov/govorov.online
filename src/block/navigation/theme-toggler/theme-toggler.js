/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */

import React, { Component } from 'react';
import cx from 'classnames';

import styles from './theme-toggler.module.css';
import {
  THEME_LIGHT, THEME_DARK, detectActualTheme, toggleTheme,
} from './utils';

const INPUT_ID = 'toggler';

toggleTheme(detectActualTheme());

export default class ThemeToggler extends Component {
  state = {
    theme: detectActualTheme(),
  };

  componentDidMount() {
    this.setState({ theme: detectActualTheme() });
  }

  toggleTheme = ({ target }) => {
    const theme = target.checked ? THEME_DARK : THEME_LIGHT;

    this.setState({ theme }, () => toggleTheme(theme));
  };

  render() {
    const { theme } = this.state;

    return (
      <div className={styles.container}>
        <label
          htmlFor={INPUT_ID}
          className={cx(styles.icon, styles.sun)}
          aria-hidden
        />

        <input
          id={INPUT_ID}
          type="checkbox"
          onChange={this.toggleTheme}
          checked={theme === THEME_DARK}
          className={styles.input}
        />
        <label
          className={styles.label}
          htmlFor={INPUT_ID}
          aria-label="Переключить тему"
        />

        <label
          htmlFor={INPUT_ID}
          className={cx(styles.icon, styles.crescent)}
          aria-hidden
        />
      </div>
    );
  }
}
