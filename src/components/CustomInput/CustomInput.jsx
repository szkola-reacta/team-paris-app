import React from 'react';

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

const CustomInput = ({
  formState: { errors },
  register,
  label,
  inputTitle,
  inputType,
  disabled,
}) => {
  return (
    <FormControl id={label} isInvalid={errors[label]}>
      <FormLabel mt={4} mb={0.5} htmlFor={label}>
        {inputTitle}
      </FormLabel>
      <Input type={inputType} {...register(label)} disabled={disabled} />
      <FormErrorMessage mt={0.5} mb={0}>
        {errors[label]?.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default CustomInput;
