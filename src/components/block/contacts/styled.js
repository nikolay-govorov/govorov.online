import { styled } from 'astroturf';

export const Container = styled('div')`
  padding-bottom: 0.5rem;
`;

export const List = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  margin: -0.5em;
`;

export const Item = styled('li')`
  list-style: none;
  padding-top: 0.5em;
  padding-right: 0.5em;
  padding-left: 0.5em;
`;
