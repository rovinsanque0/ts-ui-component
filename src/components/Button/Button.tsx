// Button.tsx
import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background: ${({ disabled }) => (disabled ? '#e5e7eb' : '#2563eb')};
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
`;

const Button: React.FC<ButtonProps> = ({
  label = 'Click Me',
  disabled = false,
  onClick,
}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
