export interface TableProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export interface TableRowProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export interface TableCellProps {
  children: React.ReactNode;
  header?: boolean;
  colSpan?: number;
}

export interface TableHeaderProps {
  children?: React.ReactNode;
}

export interface TableFooterProps {
  children?: React.ReactNode;
}
