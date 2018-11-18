/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { css } from 'astroturf';
import Image from 'gatsby-image';

const styles = css`
  .picture {
    position: relative;
    width: 80px;
    height: 80px;
    margin-right: 1.25em;
    margin-bottom: 0.75em;
    cursor: pointer;
  }
  
  .layer {
    position: absolute !important;
    width: 100%;
    backface-visibility: hidden;

    object-fit: cover;
    border-radius: 100%;
    transition: transform 1.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;

export const Container = props => (<div className={styles.picture} {...props} />);

export const Mask = props => <Image className={styles.layer} {...props} />;

export const Photo = props => <img className={styles.layer} {...props} />;
