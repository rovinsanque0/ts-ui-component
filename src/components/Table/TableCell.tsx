// TableCell.tsx
import React from 'react';
import { TableCellProps } from './Table.types';

const TableCell: React.FC<TableCellProps> = ({ children, header = false, colSpan }) => {
  const CellTag = header ? 'th' : 'td';
  return <CellTag colSpan={colSpan}>{children}</CellTag>;
};

export default TableCell;
