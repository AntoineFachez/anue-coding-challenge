'use client';
import List from './components/list/List';
import { useContext, useEffect, useState } from 'react';
import { Todo, TodoContext } from '@/context/TodoContext';
import TodoForm from './components/form/TodoForm';
import Button from './components/button/Button';
import { Add, Close } from '@mui/icons-material';

const Home: React.FC = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [showForm, setShowForm] = useState<boolean | null>(null);

  const handleSetShowForm = () => {
    setShowForm(showForm ? false : true);
  };
  const handleClickAway = (event: React.MouseEvent<HTMLDivElement>) => {
    // Check if the clicked element is the div itself, not a child
    if (event.currentTarget === event.target) {
      handleSetShowForm();
    }
  };

  return (
    <div className="w-full h-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center align-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button onClickHandler={handleSetShowForm} icon={<Add />} />
      {showForm && (
        <div
          className="absolute w-full h-full flex flex-col justify-center items-center bg-[#333433cc]"
          onClick={handleClickAway}
        >
          <div className="w-[25rem] flex justify-end">
            <Button icon={<Close />} onClickHandler={handleSetShowForm} />
          </div>
          <TodoForm onClickHandler={handleSetShowForm} />
        </div>
      )}
      <div className="w-full h-full flex flex-col justify-items-center align-items-center">
        <List
          arrayListItems={todos}
          handleSetShowForm={handleSetShowForm}
          showForm={null}
          setShowForm={function (value: boolean): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </div>
  );
};

export default Home;
