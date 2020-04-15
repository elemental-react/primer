import React, { Children } from 'react';
import { Box } from 'elemental-react';

const isFirst = i => i === 0;
const isLast = (i, length) => i === length - 1;
const isMiddle = (i, length) => !isFirst(i) && !isLast(i, length) && i > 0 && i < length;


const AvatarPair = ({ children, ...props }) => {
  const avatars = Children.map(children, (child, i) => {
    if (isFirst(i)) {
      return React.cloneElement(child, {
        // borderRadius: 0,
        height: 40,
        width: 40,
      });
    } else {
      return React.cloneElement(child, {
        position: 'absolute',
        right: '-15%',
        bottom: '-9%',
        height: 20,
        width: 20,
        boxShadow: 'rgba(255, 255, 255, 0.8) -2px -2px 0px',
        borderRadius: 2,
      });
    }
  });

  return (
    <Box width={40} position="relative" {...props}>
      {avatars}
    </Box>
  )
};

export default AvatarPair;
