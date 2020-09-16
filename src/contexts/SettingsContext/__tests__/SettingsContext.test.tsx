import React, { useContext, useEffect } from "react";
import { mount, shallow, ShallowWrapper } from "enzyme";
import SettingsContext, {
  RGBColor,
  SettingsContextProps,
  SettingsContextProvider,
} from "../SettingsContext";

describe("SettingsContext", () => {
  describe("implementation", () => {
    describe("context", () => {
      const FakeComponent: React.ComponentType = () => {
        const {
          rightLense,
          changeRightLense,
          leftLense,
          changeLeftLense,
        }: SettingsContextProps = useContext(SettingsContext);

        const newLeftLenseColor: RGBColor = {
          r: 123,
          g: 124,
          b: 125,
        };

        const newRightLenseColor: RGBColor = {
          r: 223,
          g: 224,
          b: 225,
        };

        useEffect(() => {
          it("provides left lense color initially set to red", () => {
            expect(leftLense).toEqual({
              r: 255,
              g: 0,
              b: 0,
            } as RGBColor);
          });

          it("provides right lense color initially set to cyan", () => {
            expect(rightLense).toEqual({
              r: 0,
              g: 255,
              b: 255,
            } as RGBColor);
          });

          it("provides right lense setter helper", () => {
            expect(changeRightLense).toBeInstanceOf(Function);
          });

          it("provides left lense setter helper", () => {
            expect(changeLeftLense).toBeInstanceOf(Function);
          });

          changeRightLense(newRightLenseColor);
          changeLeftLense(newLeftLenseColor);

          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        useEffect(() => {
          it("changes left lense color through helper by demand", () => {
            if (leftLense.r !== 255) {
              expect(leftLense).toEqual(newLeftLenseColor);
            }

            if (leftLense.r !== newLeftLenseColor.r) {
              expect(leftLense).toEqual({
                r: 255,
                g: 0,
                b: 0,
              });
            }
          });
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [leftLense.r]);

        useEffect(() => {
          it("changes right lense color through helper by demand", () => {
            if (rightLense.r !== 0) {
              expect(rightLense).toEqual(newRightLenseColor);
            }

            if (rightLense.r !== newRightLenseColor.r) {
              expect(rightLense).toEqual({
                r: 0,
                g: 255,
                b: 255,
              });
            }
          });
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [rightLense.r]);

        return null;
      };

      mount(<FakeComponent />);
    });

    describe("provider", () => {
      let wrapper: ShallowWrapper;

      const FakeComponent: React.ComponentType = jest.fn();

      beforeEach(() => {
        wrapper = shallow(
          <SettingsContextProvider>
            <FakeComponent />
          </SettingsContextProvider>,
        );
      });

      it("renders test component as a child", () => {
        expect(wrapper.find(FakeComponent).length).toEqual(1);
      });

      it("renders global colors context provider", () => {
        expect(wrapper.find(SettingsContext.Provider).length).toEqual(1);
      });
    });
  });
});
