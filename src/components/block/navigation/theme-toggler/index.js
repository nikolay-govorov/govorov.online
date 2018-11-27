import React, { Component } from 'react';

import {
  Container, Icon, Button, Checkbox,
} from './styled';
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
      <Container>
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
