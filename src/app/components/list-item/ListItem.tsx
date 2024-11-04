'use client';

import React, { useContext } from 'react';
import ButtonMenu from '../button-menu/ButtonMenu';
import { Todo, TodoContext } from '@/context/TodoContext';

import moment from 'moment';
import { Check } from '@mui/icons-material';
import { priorityColor } from '@/utils/colorFns';

interface ListItemProps {
  item: Todo;
  index: number;
  handleSetShowForm: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
  item,
  index,
  handleSetShowForm,
}) => {
  const { todos, setTodos, todoInFocus, setTodoInFocus } =
    useContext(TodoContext);

  const relativeTimeSince = moment(item.createdAt).fromNow();
  const relativeTimeUntil = moment(item.getDoneUntil).fromNow(true) + ' left';

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
  const handleItemClick = () => {
    handleSetShowForm();
    setTodoInFocus(item); // Set the clicked item as todoInFocus
  };

  return (
    <li
      className="w-full h-fit flex flex-row items-center align-items-center rounded-md py-2 px-2 gap-2 bg-[#333433]"
      onClick={handleItemClick}
    >
      <div className="w-[20ch] cursor-pointer" onClick={handleSetStatus}>
        <p className="text-xs">No. {index + 1}</p>
        <p
          className="text-xs text-orange"
          style={{
            color: item.status === 'pending' ? '#ff9433' : 'yellowgreen',
          }}
        >
          {item.status === 'pending' ? 'pending' : <Check />}
        </p>
        {/* <p className="text-xs">{relativeTimeSince}</p> */}
        {item.status === 'pending' && (
          <p className="text-xs">{relativeTimeUntil}</p>
        )}
      </div>
      <div className="w-full items-center">
        <p style={{ color: priorityColor(item.priority, item.status) }}>
          {item.itemName}
        </p>
      </div>
      <div className="flex flex-row">
        <ButtonMenu data={item} />
      </div>
    </li>
  );
};

export default ListItem;
