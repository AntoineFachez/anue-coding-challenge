'use client';

import { useContext, useState } from 'react';
import { Todo, TodoContext } from '@/context/TodoContext';
import Button from '../button/Button';
import { Save } from '@mui/icons-material';

const TodoForm: React.FC = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [itemName, setItemName] = useState('celebrate work');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newTodo: Todo = {
      itemName,
      status: 'pending',
      createdAt: new Date().toISOString(),
      id: crypto.randomUUID(),
    };

    setTodos([...todos, newTodo]);

    setItemName('');
  };

  return (
    <form onSubmit={handleSubmit} action="/api/toDos" method="POST">
      <div style={{ borderRadius: '5px', padding: '0.5rem', color: 'white' }}>
        <label htmlFor="itemName">What do you want to do?</label>
        <br />
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
          style={{
            borderRadius: '5px',
            padding: '0.2rem 0.5rem',
            color: 'black',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          onClickHandler={() => handleSubmit}
          type="submit"
          icon={<Save />}
        />
      </div>
    </form>
  );
};

export default TodoForm;
