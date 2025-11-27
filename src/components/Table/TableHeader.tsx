import React from "react";
import styled from "styled-components";
import { TableHeaderProps } from "./Table.types";

const StyledHeader = styled.thead`
  font-weight: bold;
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledHeader role="rowgroup">{children}</StyledHeader>;
};

TableHeader.displayName = "TableHeader";
export default TableHeader;
