import React, { useEffect, useState } from 'react';
import ListItem from '../list-item/ListItem';
import { Todo } from '@/context/TodoContext';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

import { SortMenuProps } from '../list/List';

const SortMenu: React.FC<SortMenuProps> = ({
  arrayListItems,
  setSortedTodos,
}) => {
  const [sortOrder, setSortOrder] = useState({
    createdAt: 'desc',
    getDoneUntil: 'desc',
    status: 'desc',
    itemName: 'desc',
    priority: 'desc',
  });

  useEffect(() => {
    const sortTodos = () => {
      const sortedItems = [...arrayListItems].sort((a, b) => {
        if (sortOrder.createdAt !== 'desc') {
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
  }, [arrayListItems, sortOrder.createdAt]);
  useEffect(() => {
    const sortTodos = () => {
      const sortedItems = [...arrayListItems].sort((a, b) => {
        if (sortOrder.getDoneUntil !== 'desc') {
          // Sort by getDoneUntil in ascending order
          const dateA = new Date(a.getDoneUntil);
          const dateB = new Date(b.getDoneUntil);
          return dateA.getTime() - dateB.getTime();
        } else {
          // Sort by getDoneUntil in descending order (default)
          const dateA = new Date(a.getDoneUntil);
          const dateB = new Date(b.getDoneUntil);
          return dateB.getTime() - dateA.getTime();
        }
      });
      setSortedTodos(sortedItems);
    };

    sortTodos();
  }, [arrayListItems, sortOrder.getDoneUntil]);

  useEffect(() => {
    const sortTodos = () => {
      const sortedItems = [...arrayListItems].sort((a, b) => {
        if (sortOrder.status !== 'desc') {
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
  }, [arrayListItems, sortOrder.status]);
  useEffect(() => {
    const sortTodos = () => {
      const sortedItems = [...arrayListItems].sort((a, b) => {
        if (sortOrder.itemName !== 'desc') {
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
  }, [arrayListItems, sortOrder.itemName]);
  useEffect(() => {
    const sortTodos = () => {
      const sortedItems = [...arrayListItems].sort((a, b) => {
        if (sortOrder.priority !== 'desc') {
          // Sort by priority in ascending order
          return a.priority - b.priority;
        } else {
          // Sort by priority in descending order
          return b.priority - a.priority;
        }
      });
      setSortedTodos(sortedItems);
    };

    sortTodos();
  }, [arrayListItems, sortOrder.priority]);

  const handleSort = (field: keyof typeof sortOrder) => {
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      [field]: prevSortOrder[field] === 'desc' ? 'asc' : 'desc',
    }));
  };

  return (
    <div
      style={{
        width: '100%',
        height: '50px',
        backgroundColor: '#333433',
        color: '#ffffff',
        borderRadius: '3px',
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'flex-start',
        // padding: '2rem',
      }}
    >
      <div className="w-full flex flex-row gap-2">
        <button style={{ width: '100%' }} onClick={() => handleSort('status')}>
          Status{' '}
          {sortOrder.status === 'desc' ? <ArrowDownward /> : <ArrowUpward />}
        </button>
        <button
          style={{ width: '100%' }}
          onClick={() => handleSort('priority')}
        >
          Priority{' '}
          {sortOrder.priority === 'desc' ? <ArrowDownward /> : <ArrowUpward />}
        </button>
      </div>
      {/* <button style={{ width: '100%' }} onClick={() => handleSort('createdAt')}>
        Created At{' '}
        {sortOrder.createdAt === 'desc' ? <ArrowDownward /> : <ArrowUpward />}
      </button> */}
      <button
        style={{ width: '100%' }}
        onClick={() => handleSort('getDoneUntil')}
      >
        Get done Until{' '}
        {sortOrder.getDoneUntil === 'desc' ? (
          <ArrowDownward />
        ) : (
          <ArrowUpward />
        )}
      </button>
      <button style={{ width: '100%' }} onClick={() => handleSort('itemName')}>
        Title{' '}
        {sortOrder.itemName === 'desc' ? <ArrowDownward /> : <ArrowUpward />}
      </button>
    </div>
  );
};
export default SortMenu;
