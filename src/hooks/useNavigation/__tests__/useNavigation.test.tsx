import React, { useEffect } from "react";
import { mount } from "enzyme";
import useNavigation, { UseNavigationReturn } from "../useNavigation";

describe("useNavigation hook", () => {
  describe("implementation", () => {
    const FakeComponent: React.ComponentType = () => {
      const [
        CurrentLevelComponent,
        nextLevel,
        previousLevel,
        resetLevels,
        setLevelToSettings,
        currentLevelCounter,
      ]: UseNavigationReturn = useNavigation();

      useEffect(() => {
        it("provides current level component", () => {
          expect(CurrentLevelComponent).toBeInstanceOf(Object);
        });

        it("provides next level helper", () => {
          expect(nextLevel).toBeInstanceOf(Function);
        });

        it("provides reset levels helper", () => {
          expect(resetLevels).toBeInstanceOf(Function);
        });

        it("provides set level to settings helper", () => {
          expect(setLevelToSettings).toBeInstanceOf(Function);
        });

        nextLevel();

        setTimeout(() => {
          previousLevel();
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      useEffect(() => {
        it("can change level counter by helper", () => {
          if (currentLevelCounter !== 0) {
            expect(currentLevelCounter).toEqual(1);
          }

          if (currentLevelCounter !== 1) {
            expect(currentLevelCounter).toEqual(0);
          }
        });
      }, [currentLevelCounter]);

      return null;
    };

    mount(<FakeComponent />);
  });
});
