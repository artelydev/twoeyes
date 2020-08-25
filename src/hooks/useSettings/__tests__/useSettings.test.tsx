import React, { useEffect } from "react";
import { mount } from "enzyme";
import useSettings from "../useSettings";
import { SettingsContextProps } from "../../../contexts/SettingsContext/SettingsContext";

describe("useSettings hook", () => {
  describe("implementation", () => {
    const FakeComponent: React.ComponentType = () => {
      const {
        rightLense,
        changeRightLense,
        leftLense,
        changeLeftLense,
      }: SettingsContextProps = useSettings();

      useEffect(() => {
        it("provides right lense RGBA color object", () => {
          expect(rightLense).toBeInstanceOf(Object);
        });

        it("provides left lense RGBA color object", () => {
          expect(leftLense).toBeInstanceOf(Object);
        });

        it("provides right lense change helper function", () => {
          expect(changeRightLense).toBeInstanceOf(Function);
        });

        it("provides left lense change helper function", () => {
          expect(changeLeftLense).toBeInstanceOf(Function);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return null;
    };

    mount(<FakeComponent />);
  });
});
