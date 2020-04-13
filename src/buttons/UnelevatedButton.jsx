import { extend } from 'elemental-react';

import BaseButton from './BaseButton';

const UnelevatedButton = extend(BaseButton, () => ({
  bg: 'primary',
  color: 'white',
  ':hover': {
    bg: 'rgba(98, 0, 238, 0.92)',
  },
}));

export default UnelevatedButton;
