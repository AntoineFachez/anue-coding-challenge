'use client';

import React from 'react';
import ButtonMenu from '../button-menu/ButtonMenu';
import { Todo } from '@/context/TodoContext';
import moment from 'moment';

interface ListItemProps {
  item: Todo;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const relativeTime = moment(item.createdAt).fromNow();
  return (
    <li
      className="flex flex-row items-center justify-between  py-2 shadow-custom"
      style={{
        maxWidth: '50ch',
        borderRadius: '5px',
        padding: '0 0.5rem',
        backgroundColor: '#333433',
      }}
    >
      <div>
        <p
          style={{
            fontSize: '0.8rem',
            color: item.status === 'pending' ? 'orange' : 'yellowgreen',
          }}
        >
          {item.status}
        </p>
        <p style={{ fontSize: '1rem' }}>{item.itemName}</p>
      </div>
      <br />
      <p style={{ fontSize: '0.8rem' }}>created {relativeTime}</p>
      <ButtonMenu data={item} />
    </li>
  );
};

export default ListItem;
