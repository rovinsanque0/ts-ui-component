// Card.tsx
import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const Box = styled.div<{ $disabled?: boolean }>`
  background: ${({ $disabled }) => ($disabled ? '#e5e7eb' : '#ffffff')};
  color: ${({ $disabled }) => ($disabled ? '#9ca3af' : '#111827')};
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 16px;
  max-width: 560px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 20px;
`;

const Body = styled.div`
  font-size: 15px;
`;

const Card: React.FC<CardProps> = ({
  title = 'Card Title',
  children = 'Card content',
  disabled = false,
}) => {
  return (
    <Box $disabled={disabled} role="region" aria-label="card">
      {title && <Title>{title}</Title>}
      <Body>{children}</Body>
    </Box>
  );
};

export default Card;
