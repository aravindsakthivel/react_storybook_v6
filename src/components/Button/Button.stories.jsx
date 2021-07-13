import React from "react";
import Button from "./Button";
import Center from "../Center/Center";
import { action, actions } from "@storybook/addon-actions";

export default {
  title: "form/control/Button",
  component: Button,
  decorators: [(story) => <Center>{story()}</Center>],
  argTypes: { onClick: { action: "clicked" } },
};

export const Primary = () => (
  <Button variant="primary" onClick={action("click Handler")}>
    Primary
  </Button>
);
export const Secondary = () => (
  <Button variant="secondary" {...actions("onClick", "onMouseOver")}>
    Secondary
  </Button>
);
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: "Long Primary A",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
