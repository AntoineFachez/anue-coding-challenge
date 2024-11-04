'use client';

import React, { useState } from 'react';
interface DateInputProps {
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}
const DateInput: React.FC<DateInputProps> = ({
  selectedDate,
  setSelectedDate,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
      <label htmlFor="dateInput">Finish until:</label>
      {/* <input
        type="date"
        id="start"
        name="trip-start"
        value="2018-07-22"
        min="2018-01-01"
        max="2018-12-31"
      /> */}
      <input
        type="date"
        id="dateInput"
        value={selectedDate}
        onChange={handleChange}
        style={{
          borderRadius: '3px',
          padding: '0.2rem 0.5rem',
          color: 'black',
        }}
      />
    </>
  );
};

export default DateInput;
