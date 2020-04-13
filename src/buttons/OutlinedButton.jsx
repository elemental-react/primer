import { extend } from 'elemental-react';

import BaseButton from './BaseButton';

const OutlinedButton = extend(BaseButton, () => ({
  color: 'primary',
  borderWidth: 1,
  borderColor: 'rgba(0,0,0,.12)',
  borderStyle: 'solid',
  ':hover': {
    bg: 'rgba(0, 0, 0, 0.08)',
  },
}));

export default OutlinedButton;
