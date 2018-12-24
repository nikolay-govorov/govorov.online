import { styled } from 'astroturf';

export const Wrapper = styled('div')`
  --aspect-ratio: 315 / 560;

  position: relative;

  display: flex;
  align-items: stretch;
  justify-content: stretch;

  width: 100%;
  padding-top: calc(100% * var(--aspect-ratio));

  &:before {
    display: block;
    content: "";
    width: 100%;
  }
`;

export const VideoFrame = styled('iframe')`
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;
  
  border:none;
  overflow:hidden;
`;
