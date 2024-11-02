'use client';
import List from './components/list/List';
import { useContext, useEffect, useState } from 'react';
import { Todo, TodoContext } from '@/context/TodoContext';
import TodoForm from './components/form/TodoForm';

const Home: React.FC = () => {
  const { todos, setTodos } = useContext(TodoContext);
  // useEffect(() => {
  //   return () => {};
  // }, [todos]);

  return (
    <div className="w-full h-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center align-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-fit h-fit" style={{ backgroundColor: '#333433' }}>
        <TodoForm />
      </div>
      <ul className="w-full h-full flex flex-col gap-4">
        <List arrayListItems={todos} />
      </ul>
    </div>
  );
};

export default Home;
