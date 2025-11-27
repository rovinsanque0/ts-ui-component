import Text from "./Text";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
};
export default meta;

export const Default: StoryObj<typeof Text> = {
  args: {
    size: "md",
    children: "This is default text",
  },
};

export const Large: StoryObj<typeof Text> = {
  args: {
    size: "lg",
    children: "This is large text",
  },
};

export const CustomColor: StoryObj<typeof Text> = {
  args: {
    size: "md",
    color: "red",
    children: "This is red text",
  },
};
