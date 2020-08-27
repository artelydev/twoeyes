import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { render } from "@testing-library/react";
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

  describe("user behavior", () => {
    let getByTestId: Function;
    let getByText: Function;

    const FakeComponent: React.FC = () => {
      return <div>fake content</div>;
    };

    beforeEach(() => {
      const wrapper = render(
        <FullscreenContainer>
          <FakeComponent />
        </FullscreenContainer>,
      );

      getByText = wrapper.getByText;
      getByTestId = wrapper.getByTestId;
    });

    it("shows child component content", () => {
      expect(getByText(/fake content/)).toBeInTheDocument();
    });

    it("shows fullscreen container element", () => {
      expect(getByTestId("fullscreen-container")).toBeInTheDocument();
    });
  });
});
