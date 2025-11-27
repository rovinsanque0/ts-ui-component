import React from "react";
import styled from "styled-components";
import { TableCellProps } from "./Table.types";

const StyledTH = styled.th`
  text-align: left;
  padding: 0.75rem;
  background-color: #f4f4f4;
  border-bottom: 2px solid #ccc;
`;

const StyledTD = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
`;

const TableCell: React.FC<TableCellProps> = ({
  children,
  header = false,
  colSpan,
}) => {
  const CellTag = header ? StyledTH : StyledTD;
  return <CellTag colSpan={colSpan}>{children}</CellTag>;
};
TableCell.displayName = "TableCell";
export default TableCell;
