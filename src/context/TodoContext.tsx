'use client';
import React, { createContext, useEffect, useState } from 'react';
import { mockTodoListData } from '../mockData/mockData';

interface Todo {
  id: any;
  orderIndex: number;
  itemName: string;
  status: 'pending' | 'completed';
  createdAt: string;
  getDoneUntil: string;
  priority: number;
  saved: boolean;
  private: boolean;
}
const scheme: Todo = {
  orderIndex: 0,
  itemName: 'Go for a run',
  status: 'pending',
  priority: 1,
  createdAt: new Date().toISOString(),
  getDoneUntil: new Date().toISOString(),
  id: crypto.randomUUID(),
  saved: false,
  private: true,
};
interface TodoContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todoInFocus: Todo | null; // Updated type for todoInFocus
  setTodoInFocus: React.Dispatch<React.SetStateAction<Todo | null>>;
}

const initialTodos: Todo[] = [scheme, ...mockTodoListData];

const TodoContext = createContext<TodoContextType>({
  todos: initialTodos,
  setTodos: () => {},
  todoInFocus: null, // Initialize todoInFocus as null
  setTodoInFocus: () => {},
});

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Explicitly type 'children'
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [data, setData] = useState<string | null>(null);
  const [todoInFocus, setTodoInFocus] = useState<Todo | null>(null);

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
        todoInFocus,
        setTodoInFocus,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export type { Todo }; // Use 'export type' to re-export the Todo interface
export { TodoContext, TodoProvider };
