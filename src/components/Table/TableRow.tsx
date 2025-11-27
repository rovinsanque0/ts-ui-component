import React from "react";
import styled from "styled-components";
import { TableRowProps } from "./Table.types";

const Row = styled.tr<{ disabled?: boolean }>`
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
`;

const TableRow: React.FC<TableRowProps> = ({ children, disabled }) => {
  return <Row disabled={disabled}>{children}</Row>;
};

export default TableRow;
