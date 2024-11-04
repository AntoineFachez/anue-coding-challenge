'use client';

import React, { useEffect, useState } from 'react';

interface DateTimeInputProps {
  selectedDateTime: string;
  setSelectedDateTime: React.Dispatch<React.SetStateAction<string>>;
}

const DateTimeInput: React.FC<DateTimeInputProps> = ({
  selectedDateTime,
  setSelectedDateTime,
}) => {
  const [internalDateTime, setInternalDateTime] = useState(selectedDateTime);

  useEffect(() => {
    // Format the date to YYYY-MM-DDTHH:mm
    const formattedDateTime = new Date(selectedDateTime)
      .toLocaleString('sv-SE', {
        // Use Swedish locale for the desired format
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
      .replace(' ', 'T'); // Replace space with 'T'

    setInternalDateTime(formattedDateTime);
  }, [selectedDateTime]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternalDateTime(event.target.value);
    setSelectedDateTime(event.target.value);
  };

  // Add this useEffect to log the value after it's updated
  useEffect(() => {
    console.log('internalDateTime:', internalDateTime);
  }, [internalDateTime]);

  return (
    <>
      <label htmlFor="dateTimeInput">Until when:</label>
      <input
        type="datetime-local"
        id="dateTimeInput"
        value={internalDateTime}
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

export default DateTimeInput;
