import React from 'react';

import DefaultButton from './DefaultButton';
import RaisedButton from './RaisedButton';
import UnelevatedButton from './UnelevatedButton';
import OutlinedButton from './OutlinedButton';

const getButtonFromType = (props) => {
  const { raised, outlined, danger, unelevated } = props;

  if (raised) {
    return RaisedButton;
  }
  if (unelevated) {
    return UnelevatedButton;
  }
  if (outlined) {
    return OutlinedButton;
  }

  return DefaultButton;
}

const Button = (props) => {
  const ButtonComp = getButtonFromType(props);

  return (
    <ButtonComp {...props} />
  );
}

export default Button;
