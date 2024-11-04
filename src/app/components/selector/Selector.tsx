'use client';

import { priorityColor } from '@/utils/colorFns';
import React, { useState } from 'react';

interface PrioritySelectorProps {
  onPrioritySelect: (priority: number) => void;
  selectedPriority: number;
  setSelectedPriority: (priority: number) => void;
}

const PrioritySelector: React.FC<PrioritySelectorProps> = ({
  onPrioritySelect,
  selectedPriority,
  setSelectedPriority,
}) => {
  const handlePriorityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const priority = parseInt(event.target.value, 10);
    setSelectedPriority(priority);
    onPrioritySelect(priority);
  };

  return (
    <>
      <label htmlFor="prioritySelect">Priority:</label>
      <select
        id="prioritySelect"
        value={selectedPriority}
        onChange={handlePriorityChange}
        style={{
          padding: '0.2rem',
          borderRadius: '3px',
          backgroundColor: '#333433',
          color: priorityColor(selectedPriority, 'pending'),
        }}
      >
        {Array.from({ length: 6 }, (_, i) => i).map((priority) => (
          <option
            key={priority}
            value={priority}
            style={{
              backgroundColor: '#333433',
              color: priorityColor(selectedPriority, 'pending'),
            }}
          >
            {priority}
          </option>
        ))}
      </select>
    </>
  );
};

export default PrioritySelector;
