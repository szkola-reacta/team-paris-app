import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
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
        placeholderText={`${startDatePlaceHolder} - ${endDatePlaceHolder}`}
      />
    </div>
  );
};

export default CustomDatePicker;
