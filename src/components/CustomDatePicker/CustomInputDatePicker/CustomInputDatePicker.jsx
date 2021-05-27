import { forwardRef } from 'react';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/input';

const { CalendarIcon } = require('@chakra-ui/icons');

const CustomInputDatePicker = forwardRef(({ value, onClick, placeholderText }, ref) => (
  <InputGroup>
    <InputLeftElement pointerEvents="none" children={<CalendarIcon color="gray.300" />} />
    <Input onClick={onClick} ref={ref} value={value} placeholder={placeholderText} />
  </InputGroup>
));

export default CustomInputDatePicker;
