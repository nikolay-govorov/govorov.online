import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, VideoFrame } from './styled';

function Video({ url, title }) {
  return (
    <Wrapper>
      <VideoFrame
        src={url}
        title={title}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowtransparency="true"
        allowFullScreen
      />
    </Wrapper>
  );
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Video;
