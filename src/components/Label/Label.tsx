// Label.tsx
import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  font-weight: 600;
  color: ${({ disabled }) => (disabled ? '#9ca3af' : '#111827')};
  margin-bottom: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};

  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

const Label: React.FC<LabelProps> = ({
  text = 'Label',
  htmlFor,
  disabled = false,
}) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};

export default Label;
