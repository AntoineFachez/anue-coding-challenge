'use client';

import { useContext, useState } from 'react';
import { Todo, TodoContext } from '@/context/TodoContext';
import Button from '../button/Button';
import { Add, Clear, Save } from '@mui/icons-material';
import PrioritySelector from '../selector/Selector';
import PrioritySlider from '../slider/Slider';

const TodoForm: React.FC = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [itemName, setItemName] = useState('celebrate work');

  const [selectedPriority, setSelectedPriority] = useState(0);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newTodo: Todo = {
      itemName,
      status: 'pending',
      createdAt: new Date().toISOString(),
      id: crypto.randomUUID(),
      priority: 0,
      saved: false,
    };

    setTodos([...todos, newTodo]);

    setItemName('');
  };
  const handleReset = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent form submission
    console.log('clicked');
  };
  return (
    <form onSubmit={handleSubmit} action="/api/toDos" method="POST">
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
          borderRadius: '3px',
          padding: '0.5rem',
          color: 'white',
        }}
      >
        <label htmlFor="itemName">What do you want to do?</label>
        <br />
        <div>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
            style={{
              borderRadius: '3px',
              padding: '0.2rem 0.5rem',
              color: 'black',
            }}
          />
          {itemName && (
            <Button
              onClickHandler={handleReset}
              icon={<Clear />}
              appearance="action"
            />
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row',
          }}
        >
          <PrioritySlider
            onPriorityChange={(priority) => {
              setSelectedPriority(priority);
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          onClickHandler={handleSubmit}
          type="submit"
          icon={<Add />}
          appearance={itemName ? 'action' : 'default'}
        />
      </div>
    </form>
  );
};

export default TodoForm;
