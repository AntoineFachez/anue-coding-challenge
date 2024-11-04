'use client';
import React, { createContext, useEffect, useState } from 'react';
import { mockTodoListData } from '../mockData/mockData';

interface Todo {
  id: any;
  itemName: string;
  status: 'pending' | 'completed';
  createdAt: string;
  priority: number;
  saved: boolean;
}
const scheme: Todo = {
  itemName: 'Go for a run',
  status: 'pending',
  priority: 1,
  createdAt: new Date().toISOString(),
  id: crypto.randomUUID(),
  saved: false,
};
interface TodoContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  // scheme: scheme;
}

const initialTodos: Todo[] = mockTodoListData;

const TodoContext = createContext<TodoContextType>({
  todos: initialTodos,
  setTodos: () => {},
  // scheme: scheme,
});

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Explicitly type 'children'
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/toDos');
        const data = await response.text();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., set an error state or display an error message

        setData('Error fetching data');
      }
    };

    fetchData();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        // scheme
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export type { Todo }; // Use 'export type' to re-export the Todo interface
export { TodoContext, TodoProvider };
