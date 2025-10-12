// Button.tsx
import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  label = 'Click Me',
  disabled = false,
  onClick,
}) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
