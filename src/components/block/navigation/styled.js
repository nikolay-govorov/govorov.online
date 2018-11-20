import { styled } from 'astroturf';

export const Container = styled('nav')`
  display: flex;
  padding-top: .5em;
`;

export const List = styled('ul')`
  list-style: none;
  margin-right: .75em;
`;

export const Item = styled('li')`
  display: inline-block;
  padding-right: .75em;
  padding-bottom: .25em;
`;
