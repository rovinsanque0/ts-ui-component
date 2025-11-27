import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
`;

const Table: React.FC<TableProps> = ({ children, disabled }) => {
  return (
    <StyledTable disabled={disabled} data-testid="table">
      {children}
    </StyledTable>
  );
};

export default Table;
