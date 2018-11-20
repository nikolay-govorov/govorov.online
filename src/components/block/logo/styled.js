/* eslint-disable jsx-a11y/alt-text */

import { styled } from 'astroturf';

export const Container = styled('div')`
  position: relative;
  width: 80px;
  height: 80px;
  margin-right: 1.25em;
  margin-bottom: 1.25em;
  cursor: pointer;
`;

export const Image = styled('img')`
  position: absolute !important;
  width: 100%;
  backface-visibility: hidden;

  object-fit: cover;
  transform: translateZ(0);
  transition: transform 1.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  &.round {
    border-radius: 100%;  
  }
`;
