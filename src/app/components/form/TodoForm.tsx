'use client';

import { useContext, useEffect, useState } from 'react';
import { Todo, TodoContext } from '@/context/TodoContext';
import Button from '../button/Button';
import { Add, Clear, Close, Save } from '@mui/icons-material';
// import PrivateOrBusinessSelector from '../selector/Selector';
import PrioritySlider from '../slider/Slider';
import DateInput from '../date-selector/DateSelector';

interface TodoFormProps {
  onClickHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void; // Correct type
}

const TodoForm: React.FC<TodoFormProps> = ({ onClickHandler }) => {
  const {
    todos,
    setTodos,
    todoInFocus,

    // itemName,
    // setItemName,
    // selectedDateTime,
    // setSelectedDateTime,
    // selectedPriority,
    // setSelectedPriority,
    // selectedStatus,
    // setSelectedStatus,
  } = useContext(TodoContext);

  const [itemName, setItemName] = useState('celebrate work');
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [selectedPriority, setSelectedPriority] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState('pending');
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newTodo: Todo = {
      itemName,
      status: 'pending',
      createdAt: new Date().toISOString(),
      getDoneUntil: selectedDateTime,
      id: crypto.randomUUID(),
      priority: selectedPriority,
      saved: false,
      orderIndex: 0,
      private: false,
    };

    setTodos([...todos, newTodo]);

    setItemName('');
    setSelectedPriority(1);
    setSelectedStatus('pending');
    setSelectedDateTime('');
  };
  const handleReset = (event: React.MouseEvent) => {
    event.preventDefault();
    setItemName('');
    setSelectedPriority(1);
    setSelectedStatus('pending');
    setSelectedDateTime('');
  };
  useEffect(() => {
    if (todoInFocus != null) {
      setItemName(todoInFocus.itemName);
      setSelectedDateTime(todoInFocus.getDoneUntil);
      setSelectedPriority(todoInFocus.priority);
      setSelectedStatus(todoInFocus.status);
    }
  }, [todoInFocus]);
  return (
    <form
      onSubmit={handleSubmit}
      action="/api/toDos"
      method="POST"
      className="w-[25rem] h-[25rem] flex flex-col justify-between bg-[#333433] p-4"
    >
      {/* <Button icon={<Close />} onClickHandler={onClickHandler} /> */}
      <div className="w-full h-full flex flex-col justify-between rounded-md p-2 text-white bg-[#333433]">
        <div className="w-full h-fit rounded-md text-white bg-[#333433]">
          <label htmlFor="itemName">What do you want to get done?</label>
          <div className="w-full flex flex-row rounded-md text-white bg-[#333433]">
            <input
              type="text"
              id="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
              className="w-full rounded-md p-1 text-black"
            />
            {itemName && (
              <Button
                onClickHandler={handleReset}
                icon={<Clear />}
                innerHtml="cancel"
                appearance="action"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="dateTimeInput">Until when?</label>
          <DateInput
            selectedDateTime={selectedDateTime}
            setSelectedDateTime={setSelectedDateTime}
          />
        </div>
        <div>{selectedStatus}</div>
        <div className="flex flex-col">
          <label htmlFor="prioritySlider">Priority? {selectedPriority}</label>
          <PrioritySlider
            onPriorityChange={(priority) => {
              setSelectedPriority(priority);
            }}
            selectedPriority={selectedPriority}
            setSelectedPriority={setSelectedPriority}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          onClickHandler={handleSubmit}
          type="submit"
          icon={<Add />}
          innerHtml="save"
          appearance={itemName ? 'action' : 'default'}
        />
      </div>
    </form>
  );
};

export default TodoForm;
