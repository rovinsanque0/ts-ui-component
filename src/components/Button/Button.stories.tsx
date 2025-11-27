import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};
export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: "Click Me",
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
