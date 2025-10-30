import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './Table.types';

const StyledRow = styled.tr<{ disabled?: boolean }>`
  transition: background-color 0.2s ease;

  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: ${({ disabled }) => (disabled ? 'inherit' : '#f1f1f1')};
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  }

  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  @media (max-width: 600px) {
    td,
    th {
      padding: 0.5rem;
    }
  }
`;

const TableRow: React.FC<TableRowProps> = ({ children, disabled = false }) => {
  return <StyledRow disabled={disabled}>{children}</StyledRow>;
};

export default TableRow;
