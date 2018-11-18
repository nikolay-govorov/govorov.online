import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Container, Mask, Photo } from './styled';

const LEFT = 'left';
const RIGHT = 'right';

const state = {
  angle: 0,
  manual: false,
};

class Logo extends Component {
  propTypes = {
    img: PropTypes.string.isRequired,
    maskFixed: PropTypes.string.isRequired,
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

  render() {
    const { img, maskFixed } = this.props;
    const { angle } = state;

    return (
      <Container
        onClick={this.onClick}
        ref={this.getContainerRef}
      >
        <Mask
          aria-hidden
          style={{ transform: `rotateY(${angle}deg)` }}
          fixed={maskFixed}
        />

        <Photo
          width={80}
          height={80}
          src={`${img}?s=80`}
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

          file(relativePath: { eq: "components/partials/logo/logo.png" }) {
            childImageSharp {
              fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <Logo
          img={data.site.siteMetadata.avatar}
          maskFixed={data.file.childImageSharp.fixed}
        />
      )}
    />
  );
}
