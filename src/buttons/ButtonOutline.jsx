import { extend } from 'elemental-react';

import BaseButton from './BaseButton';

const Button = extend(BaseButton, () => ({
  color: 'rgb(0, 92, 197)',
  ':hover': {
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(3, 102, 214)',
    boxShadow: 'rgba(149, 157, 165, 0.1) 0px 1px 0px, rgba(255, 255, 255, 0.03) 0px 2px 0px inset',
    borderColor: 'rgb(0, 92, 197)',
  },
  ':focus': {
    boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
    borderColor: 'transparent',
  },
  ':active': {
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(3, 95, 199)',
    boxShadow: 'rgba(4, 66, 137, 0.2) 0px 1px 0px inset',
    borderColor: 'rgba(4, 66, 137, 0.5)',
  }
}));

export default Button;
