import React, { useState } from 'react';
import ListItem from '../list-item/ListItem';
import { Todo } from '@/context/TodoContext';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

interface ListProps {
  arrayListItems: Todo[];
}

const List: React.FC<ListProps> = ({ arrayListItems }) => {
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc'); // Type for sortOrder
  const [sortField, setSortField] = useState<'createdAt' | 'status'>(
    'createdAt'
  ); // Type for sortField

  const sortedListItems = [...arrayListItems].sort((a, b) => {
    if (sortField === 'createdAt') {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === 'desc'
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    } else {
      // sortField === 'status'
      return sortOrder === 'desc'
        ? b.status.localeCompare(a.status)
        : a.status.localeCompare(b.status);
    }
  });
  return (
    <>
      <div>
        {' '}
        {/* Wrap buttons in a div */}
        <button
          onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
        >
          {sortOrder === 'desc' ? <ArrowUpward /> : <ArrowDownward />}
        </button>
        <button
          onClick={() =>
            setSortField(sortField === 'createdAt' ? 'status' : 'createdAt')
          }
        >
          Sort by {sortField === 'createdAt' ? 'Status' : 'Date'}
        </button>
      </div>
      {sortedListItems.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </>
  );
};

export default List;
