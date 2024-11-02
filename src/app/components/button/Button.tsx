'use client';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClickHandler: () => void;
  innerHtml?: string;
  icon?: React.ReactNode; // Use ReactNode for the icon prop
}

const Button: React.FC<ButtonProps> = ({
  onClickHandler,
  innerHtml,
  children,
  icon,
}) => {
  return (
    <button
      onClick={onClickHandler}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {/* {innerHtml || children}  */}
      {icon}
      {/* Use innerHtml if provided, otherwise use children */}
    </button>
  );
};

export default Button;
