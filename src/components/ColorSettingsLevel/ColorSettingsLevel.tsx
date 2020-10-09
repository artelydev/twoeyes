import React, { useEffect } from "react";
import { CirclePicker } from "react-color";
import { Box } from "@material-ui/core";
import { VisibilityOff } from "@material-ui/icons";
import Typist from "react-typist";
import styles from "../Levels.module.scss";
import { RGBColor } from "../../contexts/SettingsContext/SettingsContext";
import "../TypistCursor.scss";
import useGlobalColors from "../../hooks/useGlobalColors/useGlobalColors";
// eslint-disable-next-line import/no-cycle
import useNavigation from "../../hooks/useNavigation/useNavigation";
import COLORS from "./colors";

/**
 * Lense color settings level props
 */
export type ColorSettingsLevelProps = {
  color: RGBColor;
  changeColor: Function;
  hint: React.ReactNode;
};

/**
 * Lense color settings component
 * @param color - current lense color setting
 * @param changeColor - function to change a lense color
 * @param hint - to be provided for a user
 */
const ColorSettingsLevel: React.FC<ColorSettingsLevelProps> = ({ color, changeColor, hint }) => {
  const [, , , , , currentLevelCounter] = useNavigation();
  const [
    [, setGlobalBackground, resetGlobalBackground],
    [, setGlobalColor, resetGlobalColor],
  ] = useGlobalColors();

  useEffect(() => {
    setGlobalColor({ r: 255, g: 255, b: 255 });
    setGlobalBackground({ r: 0, g: 0, b: 0 });

    return () => {
      resetGlobalBackground();
      resetGlobalColor();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className={styles.level__container}>
      <VisibilityOff fontSize="large" htmlColor={`rgb(${color.r}, ${color.g}, ${color.b})`} />
      <h1
        style={{
          color: "white",
        }}
        className={styles.level__hint_top}
        data-testid="color-settings-level-hint"
      >
        <Typist key={currentLevelCounter}>{hint}</Typist>
      </h1>
      <Box data-testid="color-settings-level-picker" className={styles.level__picker}>
        <CirclePicker
          colors={COLORS}
          color={color}
          onChange={(newColor) => {
            changeColor(newColor.rgb);
          }}
        />
      </Box>
    </Box>
  );
};

export default ColorSettingsLevel;
