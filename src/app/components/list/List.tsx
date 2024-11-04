import React, { useEffect, useState } from 'react';
import ListItem from '../list-item/ListItem';
import { Todo } from '@/context/TodoContext';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import SortMenu from '../sort-menu/SortMenu';

interface ListProps {
  arrayListItems: Todo[];
  showForm: boolean | null;
  setShowForm: (value: boolean) => void;
  handleSetShowForm: () => void;
}
export interface SortMenuProps extends ListProps {
  // Define SortMenuProps here
  setSortedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const List: React.FC<ListProps> = ({ arrayListItems, handleSetShowForm }) => {
  const [sortedTodos, setSortedTodos] = useState<Todo[]>(arrayListItems); // New state for sorted todos

  return (
    <>
      <SortMenu
        arrayListItems={arrayListItems}
        setSortedTodos={setSortedTodos}
        showForm={null}
        setShowForm={function (value: boolean): void {
          throw new Error('Function not implemented.');
        }}
        handleSetShowForm={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <ul className="w-full h-full flex flex-col justify-items-center align-items-center gap-2">
        {/* Conditionally render the sorted list based on the active sort */}
        {sortedTodos.map(
          (
            item,
            index // Use sortedTodos here
          ) => (
            <ListItem
              key={index}
              item={item}
              index={index}
              handleSetShowForm={handleSetShowForm}
            />
          )
        )}
      </ul>
    </>
  );
};

export default List;
