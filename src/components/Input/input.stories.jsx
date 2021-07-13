import React from "react";
import Input from "./Input";

export default {
  title: "form/Input",
  component: Input,
};

export const Small = () => <Input variant="small" placeholder="Small"/>;
export const Medium = () => <Input variant="medium" placeholder="Medium"/>;
export const Large = () => <Input variant="large" placeholder="Large"/>;

Small.storyName = 'Small Input'