// Dropdown.stories.tsx
import Dropdown from "./Dropdown";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
};
export default meta;

export const Default: StoryObj<typeof Dropdown> = {};

export const Disabled: StoryObj<typeof Dropdown> = {
  args: { disabled: true },
};
