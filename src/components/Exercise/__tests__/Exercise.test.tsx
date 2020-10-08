import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { Box } from "@material-ui/core";
import { Canvas } from "react-three-fiber";
import Exercise, { ExerciseProps } from "../Exercise";
import useGlobalColors from "../../../hooks/useGlobalColors/useGlobalColors";

jest.mock("../../../hooks/useGlobalColors/useGlobalColors");

describe("Exercise component", () => {
  const defaultProps: ExerciseProps = {
    colors: [
      { r: 255, g: 0, b: 0 },
      { r: 0, g: 255, b: 255 },
    ],
  };

  describe("implementation", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
      jest.spyOn(React, "useEffect");
      // eslint-disable-next-line react/jsx-props-no-spreading
      wrapper = mount(<Exercise {...defaultProps} />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("uses global colors helpers", () => {
      expect(useGlobalColors).toBeCalledTimes(1);
    });

    it("uses side effects", () => {
      expect(React.useEffect).toBeCalled();
    });

    it("renders an exercise container", () => {
      expect(wrapper.find(Box).length).toEqual(1);
    });

    it("renders a three fiber canvas", () => {
      expect(wrapper.find(Canvas).length).toEqual(1);
    });
  });

  describe("user behavior", () => {
    it("is not possible to describe user behavior since exercise is not yet interactive", () => {
      expect(true).toEqual(true);
    });
  });
});
