import React, { useState } from "react";
import { RGBColor } from "../SettingsContext/SettingsContext";
import usePalette, { BG_COLOR, COLOR } from "../../hooks/usePalette/usePalette";

/**
 * Global colors context props type
 */
export type GlobalColorsContextProps = [
  [RGBColor, Function, Function],
  [RGBColor, Function, Function],
];

/**
 * Global colors context that contains global background and font color and
 * methods to change them
 */
const GlobalColorsContext = React.createContext<GlobalColorsContextProps>([
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  [BG_COLOR, () => {}, () => {}],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  [COLOR, () => {}, () => {}],
]);

/**
 * Global colors context provider
 * @param props - to be passed through
 */
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
