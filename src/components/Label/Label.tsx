import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.4rem;

  &[aria-disabled="true"] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Label: React.FC<LabelProps> = ({
  text = "Label",
  htmlFor,
  disabled = false,
}) => {
  return (
    <StyledLabel htmlFor={htmlFor} aria-disabled={disabled}>
      {text}
    </StyledLabel>
  );
};

export default Label;
