import React from "react";
import styled from "styled-components";

const Header = styled.thead``;

const TableHeader: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <Header>{children}</Header>;
};

export default TableHeader;
