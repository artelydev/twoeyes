import React, { useContext } from "react";
import Typist from "react-typist";
import NavigationContext from "../../contexts/NavigationContext/NavigationContext";
import useSettings from "../useSettings/useSettings";
import introLevels from "../../components/IntroLevel/introLevels";
// eslint-disable-next-line import/no-cycle
import ColorSettingsLevel from "../../components/ColorSettingsLevel/ColorSettingsLevel";
import Exercise from "../../components/Exercise/Exercise";
// eslint-disable-next-line import/no-cycle
import IntroLevel from "../../components/IntroLevel/IntroLevel";

type SettingsLevelType = {
  type: "SettingsLevel";
  component: React.ReactNode;
};

type IntroLevelType = {
  type: "IntroLevel";
  component: React.ReactNode;
};

type ExerciseLevelType = {
  type: "ExerciseLevel";
  component: React.ReactNode;
};

type ApplicationLevel = ExerciseLevelType | IntroLevelType | SettingsLevelType;

type UseNavigationReturn = [React.ReactNode, Function, Function, Function, Function, number];

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
              now, close your <b>left</b> eye <Typist.Delay ms={1000} /> and adjust <b>right</b>{" "}
              lense color so that there would be no background at all
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
              close your <b>right</b> eye <Typist.Delay ms={1000} /> and adjust <b>left</b> lense
              color so that there would be no background at all
            </span>
          }
        />
      ),
    },
    {
      type: "ExerciseLevel",
      component: <Exercise />,
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
