import React from 'react';
import { styled, css } from 'astroturf';

export const Container = styled('div')`
  display: flex;
  align-items: center;
`;

export const Icon = styled('label')`
  color: var(--text-color);
  display: flex;
  align-items: center;
  cursor: pointer;
  
  &::before {
    content: '';
    width: 18px;
    height: 18px;
  }

  &.sun::before {
    margin-right: 7px;
    background: url(./images/sun.svg);
  }

  &.crescent::before {
    margin-left: 7px;
    background: url(./images/crescent.svg);
  }
`;

const buttonStyles = css`
  .input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);
  }

  .label {
    color: var(--gray-color);
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 40px;
    height: 20px;
    padding: 2px;
    border: 2px solid var(--gray-color);
    border-radius: 10px;
    font-size: 0; /* hide text */
  }

  .label::after {
    transition: all .2s ease;
    background: var(--gray-color);
    content: "";
    border-radius: 45%;
    width: 50%;
    height: 100%;
    position: relative;
    left: 0;
  }

  .input:checked + .label::after {
    left: 50%;
  }

  .input:focus + .label {
    outline: auto;
  }
`;

/* eslint-disable-next-line jsx-a11y/label-has-associated-control */
export const Checkbox = props => <input className={buttonStyles.input} {...props} />;

/* eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control */
export const Button = props => <label className={buttonStyles.label} {...props} />;
