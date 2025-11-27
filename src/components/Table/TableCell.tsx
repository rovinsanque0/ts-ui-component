import React from "react";
import styled from "styled-components";
import { TableCellProps } from "./Table.types";

const Cell = styled.td<{ header?: boolean }>`
  font-weight: ${(p) => (p.header ? "bold" : "normal")};
  padding: 8px 12px;
  border-bottom: 1px solid #ddd;
`;

const TableCell: React.FC<TableCellProps> = ({ children, header, colSpan }) => {
  return (
    <Cell header={header} colSpan={colSpan}>
      {children}
    </Cell>
  );
};

export default TableCell;
