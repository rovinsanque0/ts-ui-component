// Dropdown.tsx
import React from 'react';
import { DropdownProps } from './Dropdown.types';

const Dropdown: React.FC<DropdownProps> = ({
  ariaLabel = 'dropdown',
  options = [
    { value: 'one', label: 'Option One' },
    { value: 'two', label: 'Option Two' },
    { value: 'three', label: 'Option Three' },
  ],
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <select
      aria-label={ariaLabel}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
