// HeroImage.tsx
import React from 'react';
import { HeroImageProps } from './HeroImage.types';

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl = 'https://picsum.photos/1200/500',
  title = 'Hero Title',
  subtitle = 'Hero subtitle goes here.',
  disabled = false,
}) => {
  return (
    <section data-testid="hero" aria-disabled={disabled}>
      <img src={imageUrl} alt={title} width="100%" height="auto" />
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default HeroImage;
