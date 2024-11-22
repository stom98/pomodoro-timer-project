import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'px-6 py-2 rounded-lg font-medium transition-colors',
        {
          'bg-blue-500 hover:bg-blue-600 text-white': variant === 'primary',
          'bg-gray-200 hover:bg-gray-300 text-gray-800': variant === 'secondary',
          'bg-red-500 hover:bg-red-600 text-white': variant === 'danger',
        }
      )}
    >
      {children}
    </button>
  );
}