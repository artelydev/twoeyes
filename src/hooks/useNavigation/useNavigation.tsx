import React, { useContext } from "react";
import NavigationContext from "../../contexts/NavigationContext/NavigationContext";
import useSettings from "../useSettings/useSettings";
import introLevels from "../../components/IntroLevel/introLevels";
// eslint-disable-next-line import/no-cycle
import ColorSettingsLevel from "../../components/ColorSettingsLevel/ColorSettingsLevel";
// eslint-disable-next-line import/no-cycle
import Exercise from "../../components/Exercise/Exercise";
// eslint-disable-next-line import/no-cycle
import IntroLevel from "../../components/IntroLevel/IntroLevel";

/**
 * Navigation settings level type
 */
type SettingsLevelType = {
  type: "SettingsLevel";
  component: React.ReactNode;
};

/**
 * Navigation intro level type
 */
type IntroLevelType = {
  type: "IntroLevel";
  component: React.ReactNode;
};

/**
 * Navigation exercise level type
 */
type ExerciseLevelType = {
  type: "ExerciseLevel";
  component: React.ReactNode;
};

/**
 * General navigation polymorphic type
 */
type ApplicationLevel = ExerciseLevelType | IntroLevelType | SettingsLevelType;

/**
 * Use navigation hook return type
 */
export type UseNavigationReturn = [React.ReactNode, Function, Function, Function, Function, number];

/**
 * Hook that enables a component to use NavigationContext as well as additional
 * navigation levels helper functions
 */
const useNavigation = (): UseNavigationReturn => {
  const { leftLense, changeLeftLense, rightLense, changeRightLense } = useSettings();

  const [currentLevelCounter, setCurrentLevelCounter] = useContext(NavigationContext);

  const levels: ApplicationLevel[] = [
    ...introLevels.map(
      ({ hint }) =>
        ({
          type: "IntroLevel",
          component: <IntroLevel hint={hint} />,
        } as IntroLevelType),
    ),
    {
      type: "SettingsLevel",
      component: (
        <ColorSettingsLevel
          color={leftLense}
          changeColor={changeLeftLense}
          hint={
            <span>
              now, choose the <b>lightest</b> color so that there would be eye icon{" "}
              <b>barely visible</b> by <b>left</b> eye yet would be still effortlessly visible by{" "}
              <b>right</b>
            </span>
          }
        />
      ),
    },
    {
      type: "SettingsLevel",
      component: (
        <ColorSettingsLevel
          color={rightLense}
          changeColor={changeRightLense}
          hint={
            <span>
              choose the <b>lightest</b> color so that there would be eye icon <b>barely visible</b>{" "}
              by <b>right</b> eye yet would be still effortlessly visible by <b>left</b>
            </span>
          }
        />
      ),
    },
    {
      type: "ExerciseLevel",
      component: <Exercise colors={[leftLense, rightLense]} />,
    },
  ];

  const nextLevel = () => {
    if (currentLevelCounter !== undefined && currentLevelCounter + 1 < levels.length) {
      setCurrentLevelCounter(currentLevelCounter + 1);
    }
  };

  const previousLevel = () => {
    if (currentLevelCounter !== undefined && currentLevelCounter > 0) {
      setCurrentLevelCounter(currentLevelCounter - 1);
    }
  };

  const resetLevel = () => {
    setCurrentLevelCounter(0);
  };

  const setLevelToSettings = () => {
    const firstSettingsLevelIndex = levels.findIndex(({ type }) => type === "SettingsLevel");

    setCurrentLevelCounter(firstSettingsLevelIndex > -1 ? firstSettingsLevelIndex : 0);
  };

  return [
    levels[currentLevelCounter].component,
    nextLevel,
    previousLevel,
    resetLevel,
    setLevelToSettings,
    currentLevelCounter,
  ];
};

export default useNavigation;
