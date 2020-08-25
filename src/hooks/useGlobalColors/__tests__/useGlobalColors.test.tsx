import React, { useEffect } from "react";
import { mount } from "enzyme";
import { GlobalColorsContextProps } from "../../../contexts/GlobalColorsContext/GlobalColorsContext";
import useGlobalColors from "../useGlobalColors";

describe("useGlobalColors hook", () => {
  describe("implementation", () => {
    const FakeComponent: React.ComponentType = () => {
      const [
        [bgColor, setBgColor, resetBgColor],
        [color, setColor, resetColor],
      ]: GlobalColorsContextProps = useGlobalColors();

      useEffect(() => {
        it("provides background color object", () => {
          expect(bgColor).toBeInstanceOf(Object);
        });

        it("provides font color object", () => {
          expect(color).toBeInstanceOf(Object);
        });

        it("provides background color setter helper", () => {
          expect(setBgColor).toBeInstanceOf(Function);
        });

        it("provides background color resetter helper", () => {
          expect(resetBgColor).toBeInstanceOf(Function);
        });

        it("provides font color setter helper", () => {
          expect(setColor).toBeInstanceOf(Function);
        });

        it("provides font color resetter helper", () => {
          expect(resetColor).toBeInstanceOf(Function);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return null;
    };

    mount(<FakeComponent />);
  });
});
