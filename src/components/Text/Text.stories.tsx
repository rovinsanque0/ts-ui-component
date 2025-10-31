import Text from "./Text";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
};
export default meta;

export const Default: StoryObj<typeof Text> = {
  args: { label: "Text Input", placeholder: "Enter a text" },
};

export const Disabled: StoryObj<typeof Text> = {
  args: { label: "Text Input", disabled: true, value: "Disabled Text" },
};
