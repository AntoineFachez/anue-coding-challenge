import React from 'react';
import { handleRemoveLSItem, handleSetLSItem } from '../../../utils/ls';
import Button from '../button/Button';
import { Todo } from '@/context/TodoContext';
import { Delete, Save, Store } from '@mui/icons-material';

interface MyButtonProps {
  data: Todo;
}

const MyButton: React.FC<MyButtonProps> = ({ data }) => {
  const handleSetItem = (action: string) => {
    const valueToStore = JSON.stringify(data);

    if (action === 'set') {
      handleSetLSItem('toDos', data);
    } else if (action === 'delete') {
      handleRemoveLSItem('toDos', data.id);
    }
  };

  return (
    <>
      {data.saved ? (
        <Button
          onClickHandler={() => handleSetItem('delete')}
          icon={<Delete />}
        />
      ) : (
        <Button
          onClickHandler={() => handleSetItem('set')}
          icon={<Save />}
          appearance="action"
        />
      )}
    </>
  );
};

export default MyButton;
