import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  &[aria-disabled="true"] {
    opacity: 0.6;
  }
`;

const Table: React.FC<TableProps> = ({ children, disabled = false }) => {
  return (
    <StyledTable aria-disabled={disabled} data-testid="table">
      {children}
    </StyledTable>
  );
};

export default Table;
