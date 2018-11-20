import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import logo from './images/logo.svg'; // eslint-disable-line import/no-unresolved
import { Container, Image } from './styled';

const SIZE = 80;
const LEFT = 'left';
const RIGHT = 'right';

const state = {
  angle: 0,
  manual: false,
};

class Logo extends Component {
  propTypes = {
    img: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.interval = setTimeout(() => {
      if (state.manual) {
        clearInterval(this.interval);

        return;
      }

      this.rotate(RIGHT);
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  rotate = (directory) => {
    state.angle += (directory === LEFT ? -180 : 180);

    this.setState({});
  };

  onClick = (ev) => {
    state.manual = true;

    const halfImage = SIZE / 2;
    const inRightPart = ev.offsetX > halfImage;

    if (inRightPart) {
      this.rotate(RIGHT);
    } else {
      this.rotate(LEFT);
    }
  };

  render() {
    const { img } = this.props;
    const { angle } = state;

    const setupImage = (imgAngle, alt) => ({
      alt,
      width: SIZE,
      height: SIZE,
      style: { transform: `rotateY(${imgAngle}deg)` },
    });

    return (
      <Container onClick={this.onClick}>
        <Image
          src={logo}

          {...setupImage(angle, 'Логотип Николая Говорова')}
        />

        <Image
          round
          src={`${img}?s=${SIZE}`}
          srcSet={`${img}?s=${SIZE * 2} 2x`}

          {...setupImage(angle + 180, 'Фото Николая Говорова')}
        />
      </Container>
    );
  }
}

export default function () {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              avatar
            }
          }
        }
      `}
      render={data => (
        <Logo img={data.site.siteMetadata.avatar} />
      )}
    />
  );
}
