import React, { useState } from "react";
import { RGBAColor } from "../SettingsContext/SettingsContext";
import usePalette, { BG_COLOR, COLOR } from "../../hooks/usePalette/usePalette";

type BackgroundContextProps = [[RGBAColor, Function, Function], [RGBAColor, Function, Function]];

const GlobalColorsContext = React.createContext<BackgroundContextProps>([
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  [BG_COLOR, () => {}, () => {}],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  [COLOR, () => {}, () => {}],
]);

export const GlobalColorsContextProvider = (props: any) => {
  const { bgColor, color } = usePalette();
  const [applicationBackground, setApplicationBackground] = useState(bgColor);
  const [applicationColor, setApplicationColor] = useState(color);

  const resetApplicationBackground = () => {
    setApplicationBackground(BG_COLOR);
  };

  const resetApplicationColor = () => {
    setApplicationColor(COLOR);
  };

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <GlobalColorsContext.Provider
      value={[
        [applicationBackground, setApplicationBackground, resetApplicationBackground],
        [applicationColor, setApplicationColor, resetApplicationColor],
      ]}
      {...props}
    />
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

export default GlobalColorsContext;
