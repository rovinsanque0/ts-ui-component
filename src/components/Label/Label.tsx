// Label.tsx
import React from 'react';
import { LabelProps } from './Label.types';

const Label: React.FC<LabelProps> = ({
  text = 'Label',
  htmlFor,
  disabled = false,
}) => {
  return (
    <label htmlFor={htmlFor} aria-disabled={disabled}>
      {text}
    </label>
  );
};

export default Label;
