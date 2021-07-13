import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  variantColor:"blue",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "solid",
  children: "Danger",
};
