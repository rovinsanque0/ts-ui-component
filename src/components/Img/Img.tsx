import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const Figure = styled.figure`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 0.75rem;
  background-color: #f4f4f4;

  &[aria-disabled="true"] {
    opacity: 0.6;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (max-width: 600px) {
    border-radius: 0.5rem;
  }
`;

const Img: React.FC<ImgProps> = ({
  src = "https://picsum.photos/600/300",
  alt = "Image",
  disabled = false,
  width,
  height,
}) => {
  return (
    <Figure data-testid="img-wrap" aria-disabled={disabled}>
      <StyledImg src={src} alt={alt} width={width} height={height} />
    </Figure>
  );
};

export default Img;
