import PropTypes from 'prop-types';
import GastbyImage from 'gatsby-image';
import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import logo from '../../assets/images/logo.svg';
import styles from './logo.module.css';

const SIZE = 80;
const LEFT = 'left';
const RIGHT = 'right';

const state = {
  angle: -180,
  manual: false,
};

function setupImage(imgAngle) {
  return {
    width: SIZE,
    height: SIZE,
    style: { transform: `rotateY(${imgAngle}deg)` },
  };
}

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

    return (
      <div className={styles.container} onClick={this.onClick}>
        <img
          className={styles.logo}
          src={logo}
          alt="Логотип Николая Говорова"

          {...setupImage(angle - 180)}
        />

        <GastbyImage
          className={styles.avatar}
          fixed={avatar}
          alt="Фото Николая Говорова"

          {...setupImage(angle)}
        />
      </div>
    );
  }
}

export default function () {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "assets/images/avatar.jpg" }) {
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
