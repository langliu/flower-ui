import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
    type: {
      control: "select",
      options: ["default", "primary", "text", "link", "dashed"],
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: "primary",
    children: "Button",
  },
};

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    // size: "large",
    children: "Button",
    type: "link",
  },
};

export const Small: Story = {
  args: {
    // size: "small",
    children: "Button",
    type:'dashed'
  },
};
