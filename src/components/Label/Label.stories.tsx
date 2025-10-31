// Label.stories.tsx
import Label from "./Label";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
};
export default meta;

export const Default: StoryObj<typeof Label> = {
  args: { text: "Label" },
};

export const Disabled: StoryObj<typeof Label> = {
  args: { text: "Disabled Label", disabled: true },
};
