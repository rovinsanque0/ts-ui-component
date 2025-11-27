import React from "react";
import styled from "styled-components";

const Footer = styled.tfoot``;

const TableFooter: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <Footer>{children}</Footer>;
};

export default TableFooter;
