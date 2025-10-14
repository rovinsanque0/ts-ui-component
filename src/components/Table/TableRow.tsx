import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './Table.types';

const StyledRow = styled.tr`
  transition: background-color 0.2s ease;

  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f1f1f1;
  }

  @media (max-width: 600px) {
    td, th {
      padding: 0.5rem;
    }
  }
`;

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default TableRow;
