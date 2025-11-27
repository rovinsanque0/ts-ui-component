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
  // Convert children to array for safe processing
  const childArray = React.Children.toArray(children);

  // Extract parts
  const header = childArray.find(
    (child: any) => child.type?.displayName === "TableHeader"
  );

  const footer = childArray.find(
    (child: any) => child.type?.displayName === "TableFooter"
  );

  // Everything else goes into <tbody>
  const bodyChildren = childArray.filter(
    (child: any) =>
      child.type?.displayName !== "TableHeader" &&
      child.type?.displayName !== "TableFooter"
  );

  return (
    <StyledTable data-testid="table" aria-disabled={disabled} role="table">
      {header}
      <tbody>{bodyChildren}</tbody>
      {footer}
    </StyledTable>
  );
};

export default Table;
