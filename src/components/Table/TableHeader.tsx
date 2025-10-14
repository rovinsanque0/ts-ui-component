import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './Table.types';

const StyledHeader = styled.thead`
  background-color: #007bff;
  color: white;

  th {
    padding: 0.75rem;
    text-align: left;
  }

  @media (max-width: 600px) {
    th {
      padding: 0.5rem;
      font-size: 0.9rem;
    }
  }
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default TableHeader;
