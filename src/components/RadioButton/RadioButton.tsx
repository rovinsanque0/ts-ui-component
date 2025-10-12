// RadioButton.tsx
import React from 'react';
import { RadioButtonProps } from './RadioButton.types';

const RadioButton: React.FC<RadioButtonProps> = ({
  label = 'Option',
  name = 'radio',
  value = 'value',
  checked = false,
  onChange,
  disabled = false,
}) => {
  const id = `${name}-${value}`;

  return (
    <label htmlFor={id} data-testid="radio-container" aria-disabled={disabled}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span>{label}</span>
    </label>
  );
};

export default RadioButton;
