import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { render } from "@testing-library/react";
import AppProviders from "../AppProviders";
import { NavigationContextProvider } from "../../../contexts/NavigationContext/NavigationContext";
import { SettingsContextProvider } from "../../../contexts/SettingsContext/SettingsContext";
import { GlobalColorsContextProvider } from "../../../contexts/GlobalColorsContext/GlobalColorsContext";

describe("AppProviders component", () => {
  describe("implementation", () => {
    let wrapper: ShallowWrapper;
    const FakeComponent: React.ComponentType = jest.fn();

    beforeEach(() => {
      wrapper = shallow(
        <AppProviders>
          <FakeComponent />
        </AppProviders>,
      );
    });

    it("renders child component", () => {
      expect(wrapper.find(FakeComponent).length).toEqual(1);
    });

    it("renders NavigationContextProvider", () => {
      expect(wrapper.find(NavigationContextProvider).length).toEqual(1);
    });

    it("renders GlobalColorsContextProvider", () => {
      expect(wrapper.find(GlobalColorsContextProvider).length).toEqual(1);
    });

    it("renders SettingsContextProvider", () => {
      expect(wrapper.find(SettingsContextProvider).length).toEqual(1);
    });
  });

  describe("user behavior", () => {
    const FakeComponent: React.FC = () => {
      return <div>fake component</div>;
    };
    let getByText: Function;

    beforeEach(() => {
      getByText = render(
        <AppProviders>
          <FakeComponent />
        </AppProviders>,
      ).getByText;
    });

    it("shows child component content to a user", () => {
      expect(getByText(/fake component/)).toBeInTheDocument();
    });
  });
});
