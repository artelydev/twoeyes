import React from "react";
import Typist from "react-typist";
import { Box } from "@material-ui/core";
// eslint-disable-next-line import/no-cycle
import WithKeyboardNavigation from "../../hocs/WithKeyboardNavigation/WithKeyboardNavigation";
import styles from "../Levels.module.scss";
import { RGBColor } from "../../contexts/SettingsContext";
import "../TypistCursor.scss";
import usePalette from "../../hooks/usePalette/usePalette";
// eslint-disable-next-line import/no-cycle
import useNavigation from "../../hooks/useNavigation/useNavigation";

/**
 * Navigation intro level props type
 */
export type IntroLevelProps = {
  hint: React.ReactNode;
};

/**
 * Navigation intro level component
 * @param hint - intro hint to be shown to a user
 */
export const IntroLevel: React.FC<IntroLevelProps> = ({ hint }) => {
  const [, , , , , currentLevelCounter] = useNavigation();

  const { color, bgColor } = usePalette();

  const hintRGBColor: RGBColor = color;
  const bgRGBColor: RGBColor = bgColor;

  const bgStyleColor = `rgb(${bgRGBColor.r}, ${bgRGBColor.g}, ${bgRGBColor.b})`;
  const hintStyleColor = `rgb(${hintRGBColor.r}, ${hintRGBColor.g}, ${hintRGBColor.b})`;

  return (
    <Box
      style={{
        backgroundColor: bgStyleColor,
      }}
      className={styles.level__container}
    >
      <h1
        style={{
          color: hintStyleColor,
        }}
        className={styles.level__hint_top}
        data-testid="intro-level-top-hint"
      >
        <Typist key={currentLevelCounter}>{hint}</Typist>
      </h1>
      <h3
        style={{
          color: hintStyleColor,
        }}
        className={styles.level__hint_bottom}
        data-testid="intro-level-bottom-hint"
      >
        <Typist>
          <Typist.Delay ms={2000} />
          Use <pre>←</pre> <pre>→</pre> to navigate or hit <pre>enter</pre> when ready <br />
          <Typist.Delay ms={1000} />
          Hit <pre>backspace</pre> to reset the application
        </Typist>
      </h3>
    </Box>
  );
};

export default WithKeyboardNavigation(IntroLevel);
