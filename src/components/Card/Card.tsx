// Card.tsx
import React from 'react';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({
  title = 'Card Title',
  children = 'Card content',
  disabled = false,
}) => {
  return (
    <div
      role="region"
      aria-label="card"
      aria-disabled={disabled}
    >
      {title && <h3>{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
