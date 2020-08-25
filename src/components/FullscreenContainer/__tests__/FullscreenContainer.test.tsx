import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import FullscreenContainer, { FullscreenContainerProps } from "../FullscreenContainer";

describe("FullscreenContainer component", () => {
  describe("implementation", () => {
    let wrapper: ShallowWrapper;
    const FakeComponent: React.ComponentType = jest.fn();
    const defaultProps: Partial<FullscreenContainerProps> = {
      className: "test-classname",
      style: {
        backgroundColor: "rgb(255, 255, 255)",
      },
    };

    beforeEach(() => {
      wrapper = shallow(
        // eslint-disable-next-line react/jsx-props-no-spreading
        <FullscreenContainer {...defaultProps}>
          <FakeComponent />
        </FullscreenContainer>,
      );
    });

    it("renders children", () => {
      expect(wrapper.find(FakeComponent).length).toEqual(1);
    });

    it("it is possible to pass classname through", () => {
      expect(wrapper.find(`.${defaultProps.className}`).length).toEqual(1);
    });
  });
});
