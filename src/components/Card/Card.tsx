import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#333" : "#fff")};
  border-radius: 0.75rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  max-width: 400px;
  margin: 1rem auto;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(-3px)")};
    box-shadow: ${({ disabled }) =>
      disabled ? "0 2px 6px rgba(0,0,0,0.1)" : "0 4px 10px rgba(0,0,0,0.15)"};
  }

  @media (max-width: 600px) {
    padding: 1rem;
    max-width: 90%;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
  color: #007bff;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const CardBody = styled.div`
  font-size: 1rem;
  color: #333;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

const Card: React.FC<CardProps> = ({
  title = "Card Title",
  children = "Card content",
  disabled = false,
}) => {
  return (
    <StyledCard disabled={disabled} role="group" aria-label="card">
      {title && <CardTitle>{title}</CardTitle>}
      <CardBody>{children}</CardBody>
    </StyledCard>
  );
};

export default Card;
