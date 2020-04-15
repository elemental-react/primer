import React from 'react';
import { Box, Text } from 'elemental-react';

const Code = ({ children, ...props }) => (
  <>
    {/* <Box borderRadius={3} bg="rgba(27,31,35,.1)" pr={2} pl={2} pt={1} pb={1} alignItems="center" {...props}> */}
    <Text color="rgba(27,31,35,.8)" fontFamily="Courier">
      {children}
    </Text>
    {/* </Box> */}
  </>
  );

export default Code;
