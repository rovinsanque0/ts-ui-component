import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledInput = styled.input`
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  color: black;

  &:disabled {
    color: gray;
  }
`;

const Text: React.FC<TextProps> = ({
  label = "Text Input",
  disabled = false,
  value = "",
  placeholder = "Enter a text",
  name = "text-input",
  type = "text",
  onChange,
}) => {
  return (
    <label>
      {label && <span>{label}</span>}
      <StyledInput
        disabled={disabled}
        defaultValue={value}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </label>
  );
};

export default Text;
