import { Box } from '@chakra-ui/layout';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import CustomInputDatePicker from './CustomInputDatePicker/CustomInputDatePicker';
const todayDate = new Date();

const CustomDatePicker = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const onChange = (update) => {
    setDateRange(update);
  };

  const customDateFormat = (date) => {
    const myDate = new Date(date);
    const dateFormatOptions = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    };
    const formattedDate = new Intl.DateTimeFormat('en-GB', dateFormatOptions).format(myDate);
    return formattedDate;
  };

  const startDatePlaceHolder = startDate ? customDateFormat(startDate) : 'Check-in';
  const endDatePlaceHolder = endDate ? customDateFormat(endDate) : 'Check-out';
  const lengthOfStay = (endDate - startDate) / (1000 * 3600 * 24);

  console.log('startDate', startDate, 'endDate', endDate);

  return (
    <div style={{ margin: '0 auto' }}>
      <DatePicker
        width="100%"
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        minDate={todayDate}
        monthsShown={2}
        dateFormat="dd/MM/yyyy"
        selectsRange={true}
        shouldCloseOnSelect={false}
        customInput={<CustomInputDatePicker onChange={onChange} placeholderText={`${startDatePlaceHolder} - ${endDatePlaceHolder}`} />}
      >
        <Box p={2}>
          {startDatePlaceHolder} - {endDatePlaceHolder}. {startDate && endDate ? `Length of stay: ${lengthOfStay} days.` : null}
        </Box>
      </DatePicker>
    </div>
  );
};

export default CustomDatePicker;
