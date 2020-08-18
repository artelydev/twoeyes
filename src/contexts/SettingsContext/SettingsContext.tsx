import React from "react";
import { useLocalStorage } from "react-use";

export type RGBAColor = {
  r: number;
  g: number;
  b: number;
  a: number;
};

type SettingsContextProps = {
  rightLense: RGBAColor;
  changeRightLense: Function;
  leftLense: RGBAColor;
  changeLeftLense: Function;
};

const LEFT_LENSE_DEFAULT = {
  r: 255,
  g: 0,
  b: 0,
  a: 1,
};

const RIGHT_LENSE_DEFAULT = {
  r: 0,
  g: 255,
  b: 255,
  a: 1,
};

const SettingsContext = React.createContext<SettingsContextProps>({
  rightLense: RIGHT_LENSE_DEFAULT,
  leftLense: LEFT_LENSE_DEFAULT,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeRightLense: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeLeftLense: () => {},
});

export const SettingsContextProvider: React.FC = (props: any) => {
  const [leftLense, changeLeftLense] = useLocalStorage<RGBAColor>(
    "LEFT_LENSE_COLOR",
    LEFT_LENSE_DEFAULT,
  );
  const [rightLense, changeRightLense] = useLocalStorage<RGBAColor>(
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
