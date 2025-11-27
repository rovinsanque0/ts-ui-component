import React from "react";
import styled from "styled-components";
import { TableRowProps } from "./Table.types";

const StyledRow = styled.tr<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const TableRow: React.FC<TableRowProps> = ({ children, disabled = false }) => {
  return (
    <StyledRow disabled={disabled} role="row">
      {children}
    </StyledRow>
  );
};

TableRow.displayName = "TableRow";
export default TableRow;
