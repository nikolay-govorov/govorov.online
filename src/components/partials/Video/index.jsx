import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, VideoFrame } from './styled';

class Video extends Component {
  render() {
    const { url, title } = this.props;

    return (
      <Wrapper>
        <VideoFrame
          src={url}
          title={title}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowTransparency="true"
          allowFullScreen
        />
      </Wrapper>
    );
  }
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Video;
