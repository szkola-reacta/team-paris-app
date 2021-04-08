import {
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import React from 'react';

const SelectInput = ({ formState, register, label, placeholder, children }) => (
  <FormControl id={label} isInvalid={formState.errors[label]}>
    <FormLabel mt={4}>Choose a subject of your problem</FormLabel>
    <Select placeholder={placeholder} {...register(label)}>
      {children}
    </Select>
    <FormErrorMessage>{formState.errors[label]?.message}</FormErrorMessage>
  </FormControl>
);

export default SelectInput;
