import React, { useContext, useEffect } from "react";
import { mount, shallow, ShallowWrapper } from "enzyme";
import GlobalColorsContext, { GlobalColorsContextProvider } from "../GlobalColorsContext";
import { BG_COLOR, COLOR } from "../../../hooks/usePalette/usePalette";
import { RGBAColor } from "../../SettingsContext/SettingsContext";

describe("GlobalColorsContext", () => {
  describe("implementation", () => {
    describe("context", () => {
      const FakeComponent: React.ComponentType = () => {
        const [[bgColor, setBgColor, resetBgColor], [color, setColor, resetColor]] = useContext(
          GlobalColorsContext,
        );

        const newBgColor: RGBAColor = {
          r: 123,
          g: 124,
          b: 125,
          a: 1,
        };

        const newColor: RGBAColor = {
          r: 223,
          g: 224,
          b: 225,
          a: 1,
        };

        useEffect(() => {
          it("provides global background color initially set to palette's default", () => {
            expect(bgColor).toEqual(BG_COLOR);
          });

          it("provides global font color initially set to palette's default", () => {
            expect(color).toEqual(COLOR);
          });

          setBgColor(newBgColor);
          setColor(newColor);

          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        useEffect(() => {
          it("changes and resets font color through helper by demand", () => {
            if (color.r !== COLOR.r) {
              expect(color).toEqual(newColor);
            }

            if (color.r !== newColor.r) {
              expect(color).toEqual(COLOR);
              resetColor();
            }
          });
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [color.r, resetColor]);

        useEffect(() => {
          it("changes and resets background color through helper by demand", () => {
            if (bgColor.r !== BG_COLOR.r) {
              expect(bgColor).toEqual(newBgColor);
            }

            if (bgColor.r !== newBgColor.r) {
              expect(bgColor).toEqual(BG_COLOR);
              resetBgColor();
            }
          });
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [bgColor.r, resetBgColor]);

        return null;
      };

      mount(<FakeComponent />);
    });

    describe("provider", () => {
      let wrapper: ShallowWrapper;

      const FakeComponent: React.ComponentType = jest.fn();

      beforeEach(() => {
        wrapper = shallow(
          <GlobalColorsContextProvider>
            <FakeComponent />
          </GlobalColorsContextProvider>,
        );
      });

      it("renders test component as a child", () => {
        expect(wrapper.find(FakeComponent).length).toEqual(1);
      });

      it("renders global colors context provider", () => {
        expect(wrapper.find(GlobalColorsContext.Provider).length).toEqual(1);
      });
    });
  });
});
