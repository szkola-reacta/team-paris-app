import {
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import React from 'react';

const SelectInput = ({
  formState: { errors },
  register,
  label,
  placeholder,
  children,
  disabled,
}) => (
  <FormControl id={label} isInvalid={errors[label]}>
    <FormLabel mt={4} mb={0.5}>
      Choose a subject of your problem
    </FormLabel>
    <Select placeholder={placeholder} {...register(label)} disabled={disabled}>
      {children}
    </Select>
    <FormErrorMessage mt={0.5} mb={0}>
      {errors[label]?.message}
    </FormErrorMessage>
  </FormControl>
);

export default SelectInput;
