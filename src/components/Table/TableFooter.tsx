import React from "react";
import styled from "styled-components";
import { TableFooterProps } from "./Table.types";

const StyledFooter = styled.tfoot`
  background-color: #f5f5f5;
`;

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <StyledFooter role="rowgroup">{children}</StyledFooter>;
};

TableFooter.displayName = "TableFooter";
export default TableFooter;
