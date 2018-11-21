import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import logo from './images/logo.svg'; // eslint-disable-line import/no-unresolved
import { Container, Image, Avatar } from './styled';

const SIZE = 80;
const LEFT = 'left';
const RIGHT = 'right';

const state = {
  angle: 0,
  manual: false,
};

class Logo extends Component {
  propTypes = {
    /* eslint-disable-next-line */
    avatar: PropTypes.object.isRequired,
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
    const { avatar } = this.props;
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

          {...setupImage(angle - 180, 'Логотип Николая Говорова')}
        />

        <Avatar
          fixed={avatar}

          {...setupImage(angle, 'Фото Николая Говорова')}
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
          file(relativePath: { eq: "components/block/logo/images/avatar.jpg" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
      `}

      render={data => (
        <Logo avatar={data.file.childImageSharp.fixed} />
      )}
    />
  );
}
