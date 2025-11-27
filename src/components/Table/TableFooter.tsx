import React from "react";
import styled from "styled-components";
import { TableFooterProps } from "./Table.types";

const StyledFooter = styled.tfoot`
  background-color: #fafafa;
  font-weight: 500;
  text-align: right;

  td {
    padding: 0.75rem;
    border-top: 2px solid #ccc;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};
TableFooter.displayName = "TableFooter";
export default TableFooter;
