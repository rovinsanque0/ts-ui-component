// Table.tsx
import React from 'react';
import { TableProps } from './Table.types';

const Table: React.FC<TableProps> = ({ children, disabled = false }) => {
  return (
    <table data-testid="table" aria-disabled={disabled}>
      {children}
    </table>
  );
};

export default Table;
