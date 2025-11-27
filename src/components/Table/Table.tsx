import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

const Table: React.FC<TableProps> = ({ children, disabled = false }) => {
  return (
    <StyledTable
      data-testid="table"
      disabled={disabled}
      aria-label="table"   
    >
      <tbody>{children}</tbody>  
    </StyledTable>
  );
};

Table.displayName = "Table";
export default Table;
