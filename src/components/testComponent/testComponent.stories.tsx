import React from "react";
import { TestComponent } from "./index";
import {
  withKnobs,
  text,
  boolean,
  color,
  select,
} from "@storybook/addon-knobs";

export default {
  title: "TestComponent",
  component: TestComponent,
  decorators: [withKnobs],
};

export const knobsBtn = () => (
);