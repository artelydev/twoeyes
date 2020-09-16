import React from "react";
import { useLocalStorage } from "react-use";

/**
 * RGB object color type
 */
export type RGBColor = {
  r: number;
  g: number;
  b: number;
};

/**
 * Settings context props type
 */
export type SettingsContextProps = {
  rightLense: RGBColor;
  changeRightLense: Function;
  leftLense: RGBColor;
  changeLeftLense: Function;
};

/**
 * Left lense RGB default color to be initially set
 */
const LEFT_LENSE_DEFAULT = {
  r: 255,
  g: 0,
  b: 0,
};

/**
 * Right lense RGB default color to be initially set
 */
const RIGHT_LENSE_DEFAULT = {
  r: 0,
  g: 255,
  b: 255,
};

/**
 * Settings context to be used to provide lenses color functionality
 */
const SettingsContext = React.createContext<SettingsContextProps>({
  rightLense: RIGHT_LENSE_DEFAULT,
  leftLense: LEFT_LENSE_DEFAULT,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeRightLense: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeLeftLense: () => {},
});

/**
 * Settings context provider to share the common lenses color functionality
 *
 * @param props - to be passed through
 */
export const SettingsContextProvider: React.FC = (props: any) => {
  const [leftLense, changeLeftLense] = useLocalStorage<RGBColor>(
    "LEFT_LENSE_COLOR",
    LEFT_LENSE_DEFAULT,
  );
  const [rightLense, changeRightLense] = useLocalStorage<RGBColor>(
    "RIGHT_LENSE_COLOR",
    RIGHT_LENSE_DEFAULT,
  );

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <SettingsContext.Provider
      value={{
        rightLense,
        changeRightLense,
        leftLense,
        changeLeftLense,
      }}
      {...props}
    />
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

export default SettingsContext;
