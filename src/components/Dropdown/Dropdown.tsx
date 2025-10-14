import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select`
  padding: 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(0, 123, 255, 0.4);
  }

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
  }
`;

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
    <StyledSelect
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
    </StyledSelect>
  );
};

export default Dropdown;
