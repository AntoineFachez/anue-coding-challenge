'use client';

import { priorityColor } from '@/utils/colorFns';
import React, { useState } from 'react';

interface PrioritySliderProps {
  onPriorityChange: (priority: number) => void;
}

const PrioritySlider: React.FC<PrioritySliderProps> = ({
  onPriorityChange,
}) => {
  const [priority, setPriority] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPriority = parseInt(event.target.value, 10);
    setPriority(newPriority);
    onPriorityChange(newPriority);
  };

  return (
    <>
      <label htmlFor="prioritySlider">Priority:</label>
      <input
        type="range"
        id="prioritySlider"
        min="0"
        max="5"
        value={priority}
        onChange={handleChange}
        style={{
          accentColor: priorityColor(priority, 'pending'), // Use accentColor for the slider's color
        }}
      />
    </>
  );
};

export default PrioritySlider;
