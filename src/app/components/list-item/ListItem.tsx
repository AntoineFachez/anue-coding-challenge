'use client';

import React, { useContext } from 'react';
import ButtonMenu from '../button-menu/ButtonMenu';
import { Todo, TodoContext } from '@/context/TodoContext';

import moment from 'moment';
import {
  Check,
  DoNotDisturb,
  IndeterminateCheckBox,
} from '@mui/icons-material';

interface ListItemProps {
  item: Todo;
  index: number;
}

const ListItem: React.FC<ListItemProps> = ({ item, index }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const relativeTime = moment(item.createdAt).fromNow();
  const handleSetStatus = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id
          ? {
              ...todo,
              status: todo.status === 'completed' ? 'pending' : 'completed',
            }
          : todo
      )
    );
  };
  const priorityColor = (priority: number, status: string) => {
    if (status === 'completed') {
      return 'gray';
    }

    switch (priority) {
      case 5:
      case 6:
        return 'red'; // Highest priority (pending)
      case 4:
        return 'orange'; // High priority (pending)
      case 3:
        return 'yellow'; // Medium priority (pending)
      case 2:
      case 1:
        return 'green'; // Low priority (pending)
      default:
        return 'blue'; // Default color (if priority is not in the expected range)
    }
  };
  return (
    <li className="flex flex-row items-center justify-between py-2 shadow-custom w-full max-w-[50ch] rounded-md px-2 bg-[#333433]">
      <div className="w-full cursor-pointer" onClick={handleSetStatus}>
        <p className="text-xs">No. {index + 1}</p>
        <p
          className="text-xs text-orange"
          style={{
            color: item.status === 'pending' ? '#ff9433' : 'yellowgreen',
          }}
        >
          {item.status === 'pending' ? 'pending' : <Check />}
        </p>
        <p className="text-xs">{relativeTime}</p>
      </div>
      <div className="w-full max-w-[20ch]">
        <p style={{ color: priorityColor(item.priority, item.status) }}>
          {/* {item.priority} */}
          {item.itemName}
        </p>
      </div>
      <div className="flex flex-row">
        {' '}
        {/* Simplified flex container */}
        <ButtonMenu data={item} />
      </div>
    </li>
  );
};

export default ListItem;
