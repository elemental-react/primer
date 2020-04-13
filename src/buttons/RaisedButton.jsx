import { extend } from 'elemental-react';

import BaseButton from './BaseButton';

const RaisedButton = extend(BaseButton, () => ({
  outlined: false,
  boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12)',
  bg: 'primary',
  color: 'white',
  ':hover': {
    // TODO: add theming for this:
    bg: 'rgba(98, 0, 238, 0.92)',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0,0,0,.12)',
  },
}));

export default RaisedButton;
