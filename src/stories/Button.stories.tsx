import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IconButton } from "../uikit/components/Button";

export default {
  title: "components/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const RightIconButton = Template.bind({});
RightIconButton.args = {
  iconSrc: "/icons/right.svg",
};
