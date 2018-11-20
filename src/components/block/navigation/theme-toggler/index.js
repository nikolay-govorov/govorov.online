import React, { Component } from 'react';
import Helmet from 'react-helmet';

import {
  Container, Icon, Button, Checkbox,
} from './styled';
import {
  THEME_LIGHT, THEME_DARK, detectActualTheme, saveTheme,
} from './utils';

const INPUT_ID = 'toggler';

export default class ThemeToggler extends Component {
  state = {
    theme: detectActualTheme(),
  };

  toggleTheme = ({ target }) => {
    this.setState(() => ({
      theme: target.checked ? THEME_DARK : THEME_LIGHT,
    }), () => {
      const { theme } = this.state;

      saveTheme(theme);
    });
  };

  render() {
    const { theme } = this.state;

    return (
      <Container>
        <Helmet>
          <body data-theme={theme} />
        </Helmet>

        <Icon
          sun
          htmlFor={INPUT_ID}
        />

        <Checkbox onChange={this.toggleTheme} checked={theme === THEME_DARK} type="checkbox" id={INPUT_ID} />
        <Button htmlFor={INPUT_ID} aria-label="Переключить тему">Переключить тему</Button>

        <Icon
          crescent
          htmlFor={INPUT_ID}
        />
      </Container>
    );
  }
}
