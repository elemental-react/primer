import React from 'react';
import { extend, Button as __Button } from 'elemental-react';

const _Button = ({ children, ...props }) => (
  <__Button
    outlined={false}
    {...props}
  >
    {children}
  </__Button>
);

const BaseButton = extend(_Button, () => ({
  pt: '6px',
  pb: '6px',
  pl: 16,
  pr: 16,
  // height: 36,
  lineHeight: 20,
  color: 'white',
  fontSize: 14,
  fontFamily: 'SF Pro Text',
  fontWeight: 600,

  bg: 'rgb(250, 251, 252)',
  // borderRadius: 6,
  outlined: true,
  borderWidth: 1,
  borderColor: 'rgb(225, 228, 232)',
  boxShadow: 'rgba(149, 157, 165, 0.1) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 2px 0px inset',
  color: 'rgb(36, 41, 46)',
  // letterSpacing: 1.25,
}));

BaseButton.defaultProps = {
  borderRadius: 6,
};

export default BaseButton;
