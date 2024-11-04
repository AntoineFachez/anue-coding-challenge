'use client';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void; // Add event parameter

  innerHtml?: string;
  icon?: React.ReactNode;
  appearance?: 'action' | 'default';
}

const Button: React.FC<ButtonProps> = ({
  onClickHandler,
  icon,
  innerHtml,
  appearance = 'default',
}) => {
  return (
    <button
      onClick={onClickHandler}
      className={
        appearance === 'action'
          ? `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`
          : `bg-grey-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`
      }
    >
      {icon ? icon : innerHtml}
    </button>
  );
};

export default Button;
