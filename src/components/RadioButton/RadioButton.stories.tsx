// RadioButton.stories.tsx
import RadioButton from "./RadioButton";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
};
export default meta;

export const Default: StoryObj<typeof RadioButton> = {
  render: () => (
    <>
      <RadioButton label="Choice A" name="demo" value="a" checked />
      <RadioButton label="Choice B" name="demo" value="b" checked />
    </>
  ),
};

export const Disabled: StoryObj<typeof RadioButton> = {
  render: () => (
    <>
      <RadioButton label="Choice A" name="disabledDemo" value="a" disabled />
      <RadioButton label="Choice B" name="disabledDemo" value="b" disabled />
    </>
  ),
};
