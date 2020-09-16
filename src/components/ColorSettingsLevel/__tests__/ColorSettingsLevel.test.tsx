import React from "react";
import { ReactWrapper, mount } from "enzyme";
import { render, waitFor } from "@testing-library/react";
import Typist from "react-typist";
import { ChromePicker } from "react-color";
import ColorSettingsLevel, { ColorSettingsLevelProps } from "../ColorSettingsLevel";
import useColorInverter from "../../../hooks/useColorInverter/useColorInverter";
import useNavigation from "../../../hooks/useNavigation/useNavigation";
import useGlobalColors from "../../../hooks/useGlobalColors/useGlobalColors";

jest.mock("../../../hooks/useColorInverter/useColorInverter");
jest.mock("../../../hooks/useNavigation/useNavigation");
jest.mock("../../../hooks/useGlobalColors/useGlobalColors");

describe("ColorSettingsLevel component", () => {
  const defaultProps: ColorSettingsLevelProps = {
    hint: "you should be doing this and that",
    changeColor: jest.fn(),
    color: {
      r: 255,
      g: 254,
      b: 253,
    },
  };

  describe("implementation", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
      jest.spyOn(React, "useEffect");
      // eslint-disable-next-line react/jsx-props-no-spreading
      wrapper = mount(<ColorSettingsLevel {...defaultProps} />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("uses color inverter", () => {
      expect(useColorInverter).toBeCalledTimes(1);
    });

    it("uses navigation", () => {
      expect(useNavigation).toBeCalledTimes(1);
    });

    it("uses global colors helpers", () => {
      expect(useGlobalColors).toBeCalledTimes(1);
    });

    it("uses side effects", () => {
      expect(React.useEffect).toBeCalled();
    });

    it("renders Typist", () => {
      expect(wrapper.find(Typist).length).toEqual(1);
    });

    it("renders ChromePicker", () => {
      expect(wrapper.find(ChromePicker).length).toEqual(1);
    });
  });

  describe("user behavior", () => {
    let getByTestId: Function;
    let getByText: Function;
    let queryByText: Function;

    beforeEach(() => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      const wrapper = render(<ColorSettingsLevel {...defaultProps} />);

      getByTestId = wrapper.getByTestId;
      getByText = wrapper.getByText;
      queryByText = wrapper.queryByText;
    });

    it("shows hint element", () => {
      expect(getByTestId("color-settings-level-hint")).toBeInTheDocument();
    });

    it("shows color picker element", () => {
      expect(getByTestId("color-settings-level-picker")).toBeInTheDocument();
    });

    it("doesn't show hint until it's typed", () => {
      expect(queryByText(new RegExp(defaultProps.hint as string))).not.toBeInTheDocument();
    });

    it("shows hint text after it is typed", async () => {
      await waitFor(
        () => expect(getByText(new RegExp(defaultProps.hint as string))).toBeInTheDocument(),
        {
          timeout: 5000,
        },
      );
    });
  });
});
