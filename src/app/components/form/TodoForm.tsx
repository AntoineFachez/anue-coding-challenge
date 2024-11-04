'use client';

import { useContext, useEffect, useState } from 'react';
import { Todo, TodoContext } from '@/context/TodoContext';
import Button from '../button/Button';
import { Add, Clear, Save } from '@mui/icons-material';
// import PrivateOrBusinessSelector from '../selector/Selector';
import PrioritySlider from '../slider/Slider';
import DateInput from '../date-selector/DateSelector';

const TodoForm: React.FC = () => {
  const { todos, setTodos, todoInFocus } = useContext(TodoContext);
  const [itemName, setItemName] = useState('celebrate work');
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [selectedPriority, setSelectedPriority] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState('pending');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newTodo: Todo = {
      itemName,
      status: 'pending',
      createdAt: new Date().toISOString(),
      getDoneUntil: selectedDateTime,
      id: crypto.randomUUID(),
      priority: selectedPriority,
      saved: false,
      orderIndex: 0,
      private: false,
    };

    setTodos([...todos, newTodo]);

    setItemName('');
    setSelectedPriority(1);
    setSelectedStatus('pending');
    setSelectedDateTime('');
  };
  const handleReset = (event: React.MouseEvent) => {
    event.preventDefault();
    setItemName('');
    setSelectedPriority(1);
    setSelectedStatus('pending');
    setSelectedDateTime('');
  };
  useEffect(() => {
    if (todoInFocus != null) {
      setItemName(todoInFocus.itemName);
      setSelectedDateTime(todoInFocus.getDoneUntil);
      setSelectedPriority(todoInFocus.priority);
      setSelectedStatus(todoInFocus.status);
    }
  }, [todoInFocus]);
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
        <label htmlFor="itemName">What do you want to get done?</label>
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
          <DateInput
            selectedDateTime={selectedDateTime}
            setSelectedDateTime={setSelectedDateTime}
          />
        </div>
        <div>{selectedStatus}</div>
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
            selectedPriority={selectedPriority}
            setSelectedPriority={setSelectedPriority}
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
