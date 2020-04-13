import React from 'react';
import { extend, Button as __Button } from 'elemental-react';

const _Button = ({ label, children, ...props }) => (
  <__Button
    outlined={false}
    label={(label && typeof label === 'string') ? label.toUpperCase() : label}
    {...props}
  >
    {(children && typeof children === 'string') ? children.toUpperCase() : children}
  </__Button>
);

const BaseButton = extend(_Button, () => ({
  m: 2,
  px: 3,
  borderRadius: 4,
  bg: 'rgba(0, 0, 0, 0)',
  height: 36,
  color: 'white',
  fontSize: 14,
  fontFamily: 'Roboto',
  fontWeight: 500,
  letterSpacing: 1.25,
}));

export default BaseButton;
