import { extend } from 'elemental-react';

import BaseButton from './BaseButton';

const Button = extend(BaseButton, () => ({
  ':hover': {
    backgroundColor: 'rgb(243, 244, 246)',
    boxShadow: 'rgba(209, 213, 218, 0.2) 0px 1px 0px, rgba(255, 255, 255, 0.1) 0px 2px 0px inset',
  },
  ':focus': {
    boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
    borderColor: 'transparent',
  },
  ':active': {
    backgroundColor: 'rgb(237, 239, 242)',
    boxShadow: 'rgba(149, 157, 165, 0.1) 0px 2px 0px inset',
    borderColor: 'rgb(209, 213, 218)',
  }
}));

export default Button;
