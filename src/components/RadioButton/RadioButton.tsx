import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  color: #333;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    gap: 0.4rem;
  }

  &[aria-disabled="true"] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const RadioInput = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: #007bff;

  @media (max-width: 600px) {
    width: 0.9rem;
    height: 0.9rem;
  }
`;

const RadioText = styled.span`
  user-select: none;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label = "Option",
  name = "radio",
  value = "value",
  checked = false,
  onChange,
  disabled = false,
}) => {
  const id = `${name}-${value}`;

  return (
    <RadioLabel
      htmlFor={id}
      data-testid="radio-container"
      aria-disabled={disabled}
    >
      <RadioInput
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <RadioText>{label}</RadioText>
    </RadioLabel>
  );
};

export default RadioButton;
