import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  text-align: center;
  color: white;

  &[aria-disabled="true"] {
    opacity: 0.6;
  }
`;

const HeroImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  filter: brightness(70%);
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  width: 90%;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl = "https://picsum.photos/1200/500",
  title = "Hero Title",
  subtitle = "Hero subtitle goes here.",
  disabled = false,
}) => {
  return (
    <HeroSection data-testid="hero" aria-disabled={disabled}>
      <HeroImg src={imageUrl} alt={title} />
      <HeroText>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </HeroText>
    </HeroSection>
  );
};

export default HeroImage;
