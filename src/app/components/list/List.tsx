import React, { useEffect, useState } from 'react';
import ListItem from '../list-item/ListItem';
import { Todo } from '@/context/TodoContext';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import SortMenu from '../sort-menu/SortMenu';

interface ListProps {
  arrayListItems: Todo[];
}
export interface SortMenuProps extends ListProps {
  // Define SortMenuProps here
  setSortedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const List: React.FC<ListProps> = ({ arrayListItems }) => {
  const [sortedTodos, setSortedTodos] = useState<Todo[]>(arrayListItems); // New state for sorted todos

  return (
    <>
      <SortMenu
        arrayListItems={arrayListItems}
        setSortedTodos={setSortedTodos}
      />
      <ul
        style={{
          width: '100%',
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'space-around',
          gap: '1rem',
        }}
      >
        {/* Conditionally render the sorted list based on the active sort */}
        {sortedTodos.map(
          (
            item,
            index // Use sortedTodos here
          ) => (
            <ListItem key={index} item={item} index={index} />
          )
        )}
      </ul>
    </>
  );
};

export default List;
