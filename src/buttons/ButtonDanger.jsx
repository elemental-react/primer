import { extend } from 'elemental-react';

import BaseButton from './BaseButton';

const ButtonDanger = extend(BaseButton, () => ({
  color: 'rgb(203, 36, 49)',
  ':hover': {
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(203, 36, 49)',
    boxShadow: 'rgba(149, 157, 165, 0.1) 0px 1px 0px, rgba(255, 255, 255, 0.03) 0px 2px 0px inset',
    borderColor: 'rgb(179, 29, 40)',
  },
  ':focus': {
    boxShadow: 'rgba(203, 36, 49, 0.4) 0px 0px 0px 3px',
    borderColor: 'transparent',
  },
  ':active': {
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(190, 34, 46)',
    boxShadow: 'rgba(179, 29, 40, 0.4) 0px 2px 0px inset',
    borderColor: 'rgb(158, 28, 35)',
  }
}));

export default ButtonDanger;
