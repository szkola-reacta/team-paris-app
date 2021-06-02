import { Container, Flex, Box, Image, Badge } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const PropertyPresentation = () => {
  return (
    <Flex maxW='xl' borderWidth='1px' borderRadius='sm' overflow='hidden'>
      <Box>
        Property photo
        <Image
          src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80'
          p='4'
        />
      </Box>
      <Box flexGrow='2'>Property description</Box>
      <Box>Property rating, price</Box>
    </Flex>
  );
};

export default PropertyPresentation;
