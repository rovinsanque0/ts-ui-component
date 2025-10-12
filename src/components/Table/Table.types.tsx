// Table.types.tsx
import { ReactNode } from 'react';

export interface TableProps {
  children?: ReactNode;
  disabled?: boolean;
}

export interface TableHeaderProps {
  children?: ReactNode;
}

export interface TableRowProps {
  children?: ReactNode;
}

export interface TableCellProps {
  children?: ReactNode;
  header?: boolean;
  colSpan?: number;
}

export interface TableFooterProps {
  children?: ReactNode;
}
