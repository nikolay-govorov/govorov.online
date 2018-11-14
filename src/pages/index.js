import React from 'react';
import { styled } from 'astroturf';

const Message = styled('div')`
  color: red;
`;

export default () => (
  <Message>Hello world!</Message>
);
