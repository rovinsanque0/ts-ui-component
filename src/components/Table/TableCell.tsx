import React from "react";
import styled from "styled-components";
import { TableCellProps } from "./Table.types";

const StyledCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <StyledCell role="cell">{children}</StyledCell>;
};

TableCell.displayName = "TableCell";
export default TableCell;
