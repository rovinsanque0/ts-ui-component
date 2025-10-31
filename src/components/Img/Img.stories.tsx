// Img.stories.tsx
import Img from "./Img";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
};
export default meta;

export const Default: StoryObj<typeof Img> = {
  args: {
    src: "https://picsum.photos/600/300",
    alt: "Sample Image",
  },
};

export const Disabled: StoryObj<typeof Img> = {
  args: {
    disabled: true,
    alt: "Disabled Image",
  },
};
