import React from "react";
import styled from "styled-components";

const Cell = styled.td`
  padding: 0.75rem 1rem;
  font-size: 1rem;
`;

const TableCell: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <Cell>{children}</Cell>;
};

export default TableCell;
