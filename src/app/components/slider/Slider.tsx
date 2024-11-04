'use client';

import { priorityColor } from '@/utils/colorFns';
import React, { useState } from 'react';

interface PrioritySliderProps {
  onPriorityChange: (priority: number) => void;
  selectedPriority: number;
  setSelectedPriority: React.Dispatch<React.SetStateAction<number>>;
}

const PrioritySlider: React.FC<PrioritySliderProps> = ({
  onPriorityChange,
  selectedPriority,
  setSelectedPriority,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPriority = parseInt(event.target.value, 10);
    setSelectedPriority(newPriority);
    onPriorityChange(newPriority);
  };

  return (
    <>
      <input
        type="range"
        id="prioritySlider"
        min="0"
        max="5"
        value={selectedPriority}
        onChange={handleChange}
        style={{
          accentColor: priorityColor(selectedPriority, 'pending'), // Use accentColor for the slider's color
        }}
      />
    </>
  );
};

export default PrioritySlider;
