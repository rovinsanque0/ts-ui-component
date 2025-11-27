import React from "react";
import styled from "styled-components";

const Row = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const TableRow: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <Row>{children}</Row>;
};

export default TableRow;
