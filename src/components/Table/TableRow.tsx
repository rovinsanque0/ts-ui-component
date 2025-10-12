// TableRow.tsx
import React from 'react';
import { TableRowProps } from './Table.types';

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default TableRow;
