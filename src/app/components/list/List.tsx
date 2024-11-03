import React, { useEffect, useState } from 'react';
import ListItem from '../list-item/ListItem';
import { Todo } from '@/context/TodoContext';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

interface ListProps {
  arrayListItems: Todo[];
}

const List: React.FC<ListProps> = ({ arrayListItems }) => {
  const [sortOrderCreatedAt, setSortOrderCreatedAt] = useState<'desc' | 'asc'>(
    'desc'
  );
  const [sortOrderStatus, setSortOrderStatus] = useState<'desc' | 'asc'>(
    'desc'
  );
  const [sortOrderItemName, setSortOrderItemName] = useState<'desc' | 'asc'>(
    'desc'
  );
  const [sortedTodos, setSortedTodos] = useState<Todo[]>(arrayListItems); // New state for sorted todos

  useEffect(() => {
    const sortTodos = () => {
      const sortedItems = [...arrayListItems].sort((a, b) => {
        if (sortOrderCreatedAt !== 'desc') {
          // Sort by createdAt in ascending order
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateA.getTime() - dateB.getTime();
        } else {
          // Sort by createdAt in descending order (default)
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB.getTime() - dateA.getTime();
        }
      });
      setSortedTodos(sortedItems);
    };

    sortTodos();
  }, [arrayListItems, sortOrderCreatedAt]);

  useEffect(() => {
    const sortTodos = () => {
      const sortedItems = [...arrayListItems].sort((a, b) => {
        if (sortOrderStatus !== 'desc') {
          // Sort by itemName in ascending order
          return a.status.localeCompare(b.status);
        } else {
          // Sort by status in descending order
          return b.status.localeCompare(a.status);
        }
      });
      setSortedTodos(sortedItems);
    };

    sortTodos();
  }, [arrayListItems, sortOrderStatus]);
  useEffect(() => {
    const sortTodos = () => {
      const sortedItems = [...arrayListItems].sort((a, b) => {
        if (sortOrderItemName !== 'desc') {
          // Sort by itemName in ascending order
          return a.itemName.localeCompare(b.itemName);
        } else {
          // Sort by itemName in descending order
          return b.itemName.localeCompare(a.itemName);
        }
      });
      setSortedTodos(sortedItems);
    };

    sortTodos();
  }, [arrayListItems, sortOrderItemName]);
  return (
    <>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexFlow: 'row',
          justifyContent: 'flex-start',
          padding: '2rem',
        }}
      >
        <button
          style={{ width: '100%' }}
          onClick={() =>
            setSortOrderStatus(sortOrderStatus === 'desc' ? 'asc' : 'desc')
          }
        >
          Status{' '}
          {sortOrderStatus === 'desc' ? <ArrowDownward /> : <ArrowUpward />}
        </button>
        <button
          style={{ width: '100%' }}
          onClick={() =>
            setSortOrderCreatedAt(
              sortOrderCreatedAt === 'desc' ? 'asc' : 'desc'
            )
          }
        >
          Created At{' '}
          {sortOrderCreatedAt === 'desc' ? <ArrowDownward /> : <ArrowUpward />}
        </button>
        <button
          style={{ width: '100%' }}
          onClick={() =>
            setSortOrderItemName(sortOrderItemName === 'desc' ? 'asc' : 'desc')
          }
        >
          Name{' '}
          {sortOrderItemName === 'desc' ? <ArrowDownward /> : <ArrowUpward />}
        </button>
      </div>
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
            <ListItem key={index} item={item} />
          )
        )}
      </ul>
    </>
  );
};

export default List;
