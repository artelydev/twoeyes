import React, { useEffect } from "react";
import { ChromePicker } from "react-color";
import { Box } from "@material-ui/core";
import Typist from "react-typist";
import styles from "../Levels.module.scss";
import { RGBAColor } from "../../contexts/SettingsContext";
import useColorInverter from "../../hooks/useColorInverter/useColorInverter";
import "../TypistCursor.scss";
import useGlobalColors from "../../hooks/useGlobalColors/useGlobalColors";
// eslint-disable-next-line import/no-cycle
import useNavigation from "../../hooks/useNavigation/useNavigation";

type ColorSettingsLevelProps = {
  color: RGBAColor;
  changeColor: Function;
  hint: React.ReactNode;
};

const ColorSettingsLevel: React.FC<ColorSettingsLevelProps> = ({ color, changeColor, hint }) => {
  const [invertColor] = useColorInverter();
  const [, , , , , currentLevelCounter] = useNavigation();

  const [
    [, setGlobalBackground, resetGlobalBackground],
    [, setGlobalColor, resetGlobalColor],
  ] = useGlobalColors();

  const hintRGBColor: RGBAColor = invertColor(color);
  const bgRGBColor: RGBAColor = color;
  const hintStyleColor = `rgb(${hintRGBColor.r}, ${hintRGBColor.g}, ${hintRGBColor.b})`;
  const bgStyleColor = `rgb(${bgRGBColor.r}, ${bgRGBColor.g}, ${bgRGBColor.b})`;

  useEffect(() => {
    setGlobalBackground(bgRGBColor);
    setGlobalColor(hintRGBColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setGlobalColor, setGlobalBackground, hintStyleColor, bgStyleColor]);

  useEffect(() => {
    return () => {
      resetGlobalBackground();
      resetGlobalColor();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className={styles.level__container}>
      <h1
        style={{
          color: hintStyleColor,
        }}
        className={styles.level__hint_top}
      >
        <Typist key={currentLevelCounter}>{hint}</Typist>
      </h1>
      <Box className={styles.level__picker}>
        <ChromePicker
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
