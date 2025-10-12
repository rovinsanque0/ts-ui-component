// Img.tsx
import React from 'react';
import { ImgProps } from './Img.types';

const Img: React.FC<ImgProps> = ({
  src = 'https://picsum.photos/600/300',
  alt = 'Image',
  disabled = false,
  width,
  height,
}) => {
  return (
    <figure data-testid="img-wrap" aria-disabled={disabled}>
      <img src={src} alt={alt} width={width} height={height} />
    </figure>
  );
};

export default Img;
