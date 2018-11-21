/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { styled, css } from 'astroturf';
import GastbyImage from 'gatsby-image';

export const Container = styled('div')`
  position: relative;
  width: 80px;
  height: 80px;
  margin-right: 1.25em;
  margin-bottom: 1.25em;
  cursor: pointer;
`;

const imageStyles = css`
  .avatar,
  .logo {
    position: absolute !important;
    width: 100%;
    backface-visibility: hidden;
  
    object-fit: cover;
    transform: translateZ(0);
    transition: transform 1.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .avatar {
    border-radius: 100%;
  }

  .logo {}
`;

export const Image = props => <img className={imageStyles.logo} {...props} />;

export const Avatar = props => <GastbyImage className={imageStyles.avatar} {...props} />;
