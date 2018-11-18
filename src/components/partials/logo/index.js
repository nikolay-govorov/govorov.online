import React, { Component } from "react";
import { StaticQuery, graphql } from 'gatsby';
import { styled } from 'astroturf';

import logoPhoto from '../../../assets/logo.png';

const Picture = styled('picture')`
  position: relative;
  width: 5em;
  height: 5em;
  margin-right: 1.25em;
  margin-bottom: 0.75em;
  cursor: pointer;
`;

const Photo = styled('img')`
  position: absolute;
  width: 100%;
  backface-visibility: hidden;

  object-fit: cover;
  border-radius: 100%;
  transition: transform 1.4s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

const LEFT = 'left';
const RIGHT = 'right';

const state = {
  angle: 0,
  manual: false,
};

class Logo extends Component {
  rotate = (directory) => {
    state.angle = state.angle + (directory === LEFT ? -180 : 180);

    this.setState({});
  };

  onClick = (ev) => {
    state.manual = true;

    const halfImage = this.container.offsetWidth / 2;
    const inRightPart = ev.offsetX > halfImage;

    if (inRightPart) {
      this.rotate(RIGHT);
    } else {
      this.rotate(LEFT);
    }
  };

  getContainerRef = (node) => {
    this.container = node;
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

  render() {
    const { img } = this.props;
    const { angle } = state;

    return (
      <Picture
        className="logo"
        onClick={this.onClick}
        ref={this.getContainerRef}
      >
        <Photo
          src={logoPhoto}
          className="logo__mask"
          aria-hidden={true}
          style={{ transform: `rotateY(${angle}deg)` }}
        />

        <Photo
          className="logo__photo"
          src={`${img}?s=120`}
          alt="Фото Николая Говорова"
          style={{ transform: `rotateY(${angle + 180}deg)` }}
        />
      </Picture>
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
      render={(data) => <Logo img={data.site.siteMetadata.avatar} />}
    />
  );
}
