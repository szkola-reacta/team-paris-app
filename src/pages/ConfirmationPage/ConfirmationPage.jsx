import React from 'react';

import { Flex, Text, Button } from '@chakra-ui/react';

const ConfirmationPage = ({ onClick, mainText, buttonLabel }) => (
  <Flex
    height='100%'
    maxWidth='60ch'
    alignItems='center'
    justifyContent='center'
    fontSize='2xl'
    margin='0 auto'
    flexDirection='column'
    backgroundColor='#f2f2f2'
  >
    <Text
      backgroundColor='blue.600'
      color='white'
      borderRadius='xl'
      padding='1em'
    >
      {mainText}
    </Text>
    <Button
      mt='2em'
      colorScheme='blue'
      variant='outline'
      size='lg'
      onClick={onClick}
    >
      {buttonLabel}
    </Button>
  </Flex>
);

export default ConfirmationPage;
