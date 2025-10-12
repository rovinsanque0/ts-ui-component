// HeroImage.stories.tsx
import HeroImage from './HeroImage';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
};
export default meta;

export const Default: StoryObj<typeof HeroImage> = {
  args: {
    title: 'Hero Title',
    subtitle: 'Hero subtitle goes here.',
  },
};

export const Disabled: StoryObj<typeof HeroImage> = {
  args: {
    disabled: true,
    title: 'Disabled Hero',
    subtitle: 'This hero is disabled.',
  },
};
