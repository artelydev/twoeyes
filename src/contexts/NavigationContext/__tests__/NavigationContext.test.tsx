import React, { useContext, useEffect } from "react";
import { mount, shallow, ShallowWrapper } from "enzyme";
import NavigationContext, {
  NavigationContextProps,
  NavigationContextProvider,
} from "../NavigationContext";

describe("NavigationContext", () => {
  describe("implementation", () => {
    describe("context", () => {
      const FakeComponent: React.ComponentType = () => {
        const [
          currentNavigationLevel,
          setCurrentNavigationLevel,
        ]: NavigationContextProps = useContext(NavigationContext);

        const newNavigationLevelCounter = 2;

        useEffect(() => {
          it("provides current navigation level counter initially set to 0", () => {
            expect(currentNavigationLevel).toEqual(0);
          });

          it("provides navigation level counter setter function", () => {
            expect(setCurrentNavigationLevel).toBeInstanceOf(Function);
          });

          setCurrentNavigationLevel(newNavigationLevelCounter);

          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        useEffect(() => {
          it("changes navigation level counter through helper by demand", () => {
            if (currentNavigationLevel !== 0) {
              expect(currentNavigationLevel).toEqual(newNavigationLevelCounter);
            }

            if (currentNavigationLevel !== newNavigationLevelCounter) {
              expect(currentNavigationLevel).toEqual(0);
            }
          });
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [currentNavigationLevel]);

        return null;
      };

      mount(<FakeComponent />);
    });

    describe("provider", () => {
      let wrapper: ShallowWrapper;

      const FakeComponent: React.ComponentType = jest.fn();

      beforeEach(() => {
        wrapper = shallow(
          <NavigationContextProvider>
            <FakeComponent />
          </NavigationContextProvider>,
        );
      });

      it("renders test component as a child", () => {
        expect(wrapper.find(FakeComponent).length).toEqual(1);
      });

      it("renders global colors context provider", () => {
        expect(wrapper.find(NavigationContext.Provider).length).toEqual(1);
      });
    });
  });
});
