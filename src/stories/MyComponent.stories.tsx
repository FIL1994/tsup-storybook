import type { Meta, StoryObj } from "@storybook/react";

import { MyComponent } from "../ components/MyComponent";

const meta = {
  title: "MyComponent",
  component: MyComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MyComponentBasic: Story = {
  args: {},
};
