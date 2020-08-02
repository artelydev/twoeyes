import React from "react";
import { HuePicker } from "react-color";
import { storiesOf } from "@storybook/react";

storiesOf("ColorControl", module).add("default", () => <HuePicker />);
