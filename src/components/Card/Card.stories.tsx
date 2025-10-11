// Card.stories.tsx
import Card from './Card';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    title: 'Product',
    children: 'This is a reusable card component.',
    disabled: false,
  },
};
export default meta;

export const Default: StoryObj<typeof Card> = {};
export const Disabled: StoryObj<typeof Card> = {
  args: { disabled: true },
};
