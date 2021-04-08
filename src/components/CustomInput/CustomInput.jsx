import React from 'react';

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

const TextInput = ({ formState, register, label, inputTitle, inputType }) => (
  <FormControl id={label} isInvalid={formState.errors[label]}>
    <FormLabel mt={4} htmlFor={label}>
      {inputTitle}
    </FormLabel>
    <Input type={inputType} {...register(label)} />
    <FormErrorMessage>{formState.errors[label]?.message}</FormErrorMessage>
  </FormControl>
);

export default TextInput;
