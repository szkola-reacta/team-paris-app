import React from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { CustomButton } from '../../components';

const ConfirmationPage = ({ onClick, mainText, buttonLabel }) => {
  return (
    <Flex
      height='100%'
      maxWidth='60ch'
      alignItems='center'
      justifyContent='center'
      fontSize='2xl'
      margin='0 auto'
      flexDirection='column'
      backgroundColor='#f2f2f2'
      mt='0'
    >
      <Text
        backgroundColor='blue.600'
        color='white'
        borderRadius='xl'
        padding='1em'
      >
        {mainText}
      </Text>
      <CustomButton
        mt='2em'
        colorScheme='blue'
        variant='outline'
        size='lg'
        onClick={onClick}
      >
        {buttonLabel}
      </CustomButton>
    </Flex>
  );
};

export default ConfirmationPage;
