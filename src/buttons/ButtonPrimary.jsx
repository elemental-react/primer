import { extend } from 'elemental-react';

import BaseButton from './BaseButton';

const Button = extend(BaseButton, () => ({
  bg: 'rgb(21, 151, 57)',
  borderColor: 'rgb(34, 134, 58)',
  boxShadow: 'rgba(20, 70, 32, 0.1) 0px 1px 0px, rgba(255, 255, 255, 0.03) 0px 2px 0px inset',
  color: 'rgb(255, 255, 255)',
  ':hover': {
    backgroundColor: 'rgb(19, 137, 52)',
    borderColor: 'rgb(23, 111, 44)',
  },
  ':focus': {
    boxShadow: 'rgb(148, 211, 162) 0px 0px 0px 3px',
    backgroundColor: 'rgb(19, 137, 52)',
    borderColor: 'transparent',
  },
  ':active': {
    backgroundColor: 'rgb(18, 128, 49)',
    boxShadow: 'rgba(20, 70, 32, 0.2) 0px 1px 0px inset',
    borderColor: 'rgb(23, 111, 44)',
  }
}));

export default Button;
