import { extend } from 'elemental-react';

import BaseButton from './BaseButton';

const DefaultButton = extend(BaseButton, () => ({
  color: 'primary',
  ':hover': {
    bg: 'rgba(0, 0, 0, 0.08)',
  },
}));

export default DefaultButton;
