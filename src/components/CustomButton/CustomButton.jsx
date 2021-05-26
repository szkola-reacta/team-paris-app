import React from 'react';

import { Button } from '@chakra-ui/react';

const CustomButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default CustomButton;
