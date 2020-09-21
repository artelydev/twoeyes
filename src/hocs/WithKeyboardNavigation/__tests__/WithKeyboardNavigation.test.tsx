import React from "react";
import { render } from "@testing-library/react";
import { mount } from "enzyme";
import WithKeyboardNavigation from "../WithKeyboardNavigation";
import useNavigation from "../../../hooks/useNavigation/useNavigation";

jest.mock("../../../hooks/useNavigation/useNavigation");

describe("WithKeyboardNavigation HOC", () => {
  describe("user behavior", () => {
    let getByText;

    it("renders wrapped component inner content", () => {
      const FakeComponent: React.FC = () => <div>fake component</div>;
      const KeyboardNavigationEnhancedComponent: React.ComponentType = WithKeyboardNavigation(
        FakeComponent,
      );

      const wrapper = render(<KeyboardNavigationEnhancedComponent />);

      getByText = wrapper.getByText;

      expect(getByText(/fake component/)).toBeInTheDocument();
    });
  });

  describe("implementation", () => {
    it("uses navigation hook", () => {
      const FakeComponent: React.FC = () => null;
      const WrappedComponent: React.ComponentType = WithKeyboardNavigation(FakeComponent);

      mount(<WrappedComponent />);

      expect(useNavigation).toBeCalled();
    });

    it("passes all props to wrapped component", () => {
      const FakeComponent: React.FC<{ a: boolean; b: string }> = ({ a, b }) => {
        expect(a).toEqual(true);
        expect(b).toEqual("fake");

        return null;
      };

      const WrappedComponent: React.ComponentType<any> = WithKeyboardNavigation(FakeComponent);

      mount(<WrappedComponent a b="fake" />);
    });
  });
});
