import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.1s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &[disabled] {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
