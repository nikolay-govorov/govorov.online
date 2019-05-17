import { css } from 'astroturf';

export default css`
.wrapper {
  width: 100%;
  max-width: var(--readable-heading-width);
}

.container {
  --aspect-ratio: 1 / (480 / 360);

  position: relative;

  display: flex;
  align-items: stretch;
  justify-content: stretch;

  width: 100%;
  height: 0;
  padding-bottom: calc(100% * var(--aspect-ratio));
}

.link {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.container .img {
  padding: 0;
  margin: 0;
  width: 100%;
  cursor: pointer;
}

.img.error {
  width: 100%;
  height: 100%;
  background: #000;
}

.button {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  padding: 0;
  width: 68px;
  height: 48px;
  display: none;
  border: none;
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
}

.enabled .button {
  display: block;
}

.buttonShape {
  fill: #212121;
  fill-opacity: 0.8;
}

.buttonIcon {
  fill: #ffffff;
}

.wrapper:hover .buttonShape,
.button:focus .buttonShape {
  fill: #ff0000;
  fill-opacity: 1;
}

.video {
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;

  border: none;
  overflow: hidden;
}
`;
