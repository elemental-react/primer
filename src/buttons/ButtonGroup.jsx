import React, { Children } from 'react';
import { Row } from 'elemental-react';

const isFirst = i => i === 0;
const isLast = (i, length) => i === length - 1;

const isMiddle = (i, length) => !isFirst(i) && !isLast(i, length) && i > 0 && i < length;

const ButtonGroup = ({ children, ...props }) => {
  const parsedButtons = Children.map(children, (child, i) => {
    if (isFirst(i)) {
      return React.cloneElement(child, {
        // borderRadius: 0,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 6,
        borderRightWidth: 0,
      });
    } else {
      return React.cloneElement(child, {
        // borderRadius: 0,
        borderRightWidth: 0,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        ...(isMiddle(i, children.length) && {
          borderRadius: 0,
        }),
        ...(isLast(i, children.length) && {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderTopRightRadius: 6,
          borderBottomRightRadius: 6,
        })
      });
    }
  });

  return (
    <Row {...props}>
      {parsedButtons}
    </Row>
  )
};

export default ButtonGroup;
