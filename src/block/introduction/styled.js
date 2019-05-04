import { styled } from 'astroturf';

export const Container = styled('div')`
  font-size: calc(1em + 1vw);
`;

export const Link = styled('span')`
  &:not(:last-child) {
    display: inline-block;
    margin-right: 10px;

    &::after {
      content: ", ";
    }
  }
`;
