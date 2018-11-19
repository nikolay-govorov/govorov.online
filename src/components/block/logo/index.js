import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import logo from './images/logo.svg'; // eslint-disable-line import/no-unresolved
import { Container, Photo } from './styled';

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

    return (
      <Container onClick={this.onClick}>
        <Photo
          width={SIZE}
          height={SIZE}
          src={logo}
          alt="Логотип Николая Говорова"
          style={{ transform: `rotateY(${angle}deg)` }}
        />

        <Photo
          width={80}
          height={80}
          src={`${img}?s=${SIZE}`}
          srcset={`${img}?s=${SIZE * 2} 2x`}
          alt="Фото Николая Говорова"
          style={{ transform: `rotateY(${angle + 180}deg)` }}
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
