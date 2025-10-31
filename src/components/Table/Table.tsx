import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
  border: 1px solid #ddd;
  background-color: #fff;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }

  &[aria-disabled="true"] {
    opacity: 0.6;
  }
`;

const Table: React.FC<TableProps> = ({ children, disabled = false }) => {
  return (
    <StyledTable data-testid="table" aria-disabled={disabled}>
      {children}
    </StyledTable>
  );
};

export default Table;
