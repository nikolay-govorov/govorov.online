import { styled, css } from 'astroturf';

export const Container = styled('header')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const styles = css`
  .title {
    margin: 0;
    font-weight: 700;
    font-size: 1.5em;
  }

  .logo,
  .navigation {
    margin-bottom: 1.25em;;
  }

  .logo {
    margin-right: 1.25em;;
  }
`;
