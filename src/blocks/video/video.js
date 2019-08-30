/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { URL } from 'universal-url';

import styles from './video.module.css';

function parseUrl(urlStr) {
  const url = new URL(urlStr);

  let link = '';
  let frameURL = '';
  let img = '';

  url.searchParams.append('autoplay', '1');

  if (url.host.includes('youtube')) {
    const videoID = url.pathname.replace(/\/embed\//, '');

    url.searchParams.append('rel', '0');
    url.searchParams.append('showinfo', '0');

    link = `https://www.youtube.com/watch?v=${videoID}&${url.search}`;
    img = `https://i.ytimg.com/vi/${videoID}/hqdefault.jpg`;
    frameURL = url.toString();
  } else {
    link = url.toString();
    frameURL = url.toString();
    img = '';
  }

  return [link, frameURL, img];
}

function Video({ url, title }) {
  const [buttonEnabled, onButton] = useState(false);
  const [showPlayer, togglePlayer] = useState(false);
  const [link, frameURL, img] = useMemo(() => parseUrl(url), [url]);

  function onVideoClick(event) {
    event.preventDefault();

    togglePlayer(true);
  }

  function videoPreviewOnError({ target }) {
    /* eslint-disable-next-line no-param-reassign */
    target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'10\' viewBox=\'0 0 10 10\'%3E%3Crect x=\'0\' y=\'0\' width=\'10\' height=\'10\' fill=\'black\'/%3E%3C/svg%3E';
    target.classList.add(styles.error);
  }

  useEffect(() => onButton(true), []);

  return (
    <div
      className={cx(styles.wrapper, { [styles.enabled]: buttonEnabled })}
      onClick={onVideoClick}
    >
      <div className={styles.container}>
        {showPlayer ? (
          <iframe
            className={styles.video}
            src={frameURL}
            title={title}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; encrypted-media"
          />
        ) : (
          <>
            <a
              className={cx(styles.link, 'link--clean')}
              href={buttonEnabled ? '' : link}
            >
              <img className={styles.img} src={img} alt={title} onError={videoPreviewOnError} />
            </a>

            <button
              type="button"
              className={styles.button}
              aria-label="Запусить видео"
            >
              <svg width="68" height="48" viewBox="0 0 68 48">
                <path className={styles.buttonShape} d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" />
                <path className={styles.buttonIcon} d="M 45,24 27,14 27,34" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Video;
