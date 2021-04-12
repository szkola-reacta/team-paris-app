import {
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import React from 'react';

const TextareaInput = ({
  formState: { errors },
  register,
  label,
  placeholder,
  disabled,
}) => (
  <FormControl id={label} isInvalid={errors[label]}>
    <FormLabel mt={4} mb={0.5}>
      Describe your problem
    </FormLabel>
    <Textarea
      placeholder={placeholder}
      {...register(label)}
      disabled={disabled}
    />
    <FormErrorMessage mt={0.5} mb={0}>
      {errors[label]?.message}
    </FormErrorMessage>
  </FormControl>
);

export default TextareaInput;
