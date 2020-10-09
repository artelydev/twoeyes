import React, { useEffect } from "react";
import { mount } from "enzyme";
import usePalette, { COLOR, BG_COLOR, ACCENT, SECONDARY, Palette } from "../usePalette";
import { RGBColor } from "../../../contexts/SettingsContext/SettingsContext";

const expectedColor: RGBColor = {
  r: 66,
  g: 66,
  b: 66,
};

const expectedBgColor: RGBColor = {
  r: 250,
  g: 250,
  b: 250,
};

const expectedAccentColor: RGBColor = {
  r: 252,
  g: 252,
  b: 98,
};

const expectedSecondaryColor: RGBColor = {
  r: 201,
  g: 201,
  b: 201,
};

describe("usePalette hook", () => {
  describe("implementation", () => {
    const FakeComponent: React.ComponentType = () => {
      const { color, bgColor, accent, secondary }: Palette = usePalette();

      useEffect(() => {
        it("provides a font color initially set to default one", () => {
          expect(color).toEqual(expectedColor);
        });

        it("provides a background color initially set to default one", () => {
          expect(bgColor).toEqual(expectedBgColor);
        });

        it("provides an accent color initially set to default one", () => {
          expect(accent).toEqual(expectedAccentColor);
        });

        it("provides a secondary font color initially set to default one", () => {
          expect(secondary).toEqual(expectedSecondaryColor);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return null;
    };

    mount(<FakeComponent />);
  });
});

describe("exportable palette colors constants", () => {
  test("exported palette font color is equal to certain color", () => {
    expect(COLOR).toEqual(expectedColor);
  });

  test("exported palette background color is equal to certain  color", () => {
    expect(BG_COLOR).toEqual(expectedBgColor);
  });

  test("exported palette accent color is equal to certain  color", () => {
    expect(ACCENT).toEqual(expectedAccentColor);
  });

  test("exported palette secondary font color is equal to certain  color", () => {
    expect(SECONDARY).toEqual(expectedSecondaryColor);
  });
});
