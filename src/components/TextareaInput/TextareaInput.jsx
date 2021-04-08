import {
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import React from 'react';

const TextareaInput = ({ formState, register, label, placeholder }) => (
  <FormControl id={label} isInvalid={formState.errors[label]}>
    <FormLabel mt={4}>Describe your problem</FormLabel>
    <Textarea placeholder={placeholder} {...register(label)} />
    <FormErrorMessage>{formState.errors[label]?.message}</FormErrorMessage>
  </FormControl>
);

export default TextareaInput;
