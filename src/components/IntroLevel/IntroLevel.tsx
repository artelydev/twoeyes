import React from "react";
import Typist from "react-typist";
import { Box } from "@material-ui/core";
import styles from "../Levels.module.scss";
import { RGBAColor } from "../../contexts/SettingsContext";
import "../TypistCursor.scss";
import usePalette from "../../hooks/usePalette/usePalette";
// eslint-disable-next-line import/no-cycle
import useNavigation from "../../hooks/useNavigation/useNavigation";

type IntroLevelProps = {
  hint: React.ReactNode;
};

const IntroLevel: React.FC<IntroLevelProps> = ({ hint }) => {
  const [, , , , , currentLevelCounter] = useNavigation();

  const { color, bgColor } = usePalette();

  const hintRGBColor: RGBAColor = color;
  const bgRGBColor: RGBAColor = bgColor;

  const bgStyleColor = `rgba(${bgRGBColor.r}, ${bgRGBColor.g}, ${bgRGBColor.b}, ${bgRGBColor.a})`;
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
      >
        <Typist key={currentLevelCounter}>{hint}</Typist>
      </h1>
      <h3
        style={{
          color: hintStyleColor,
        }}
        className={styles.level__hint_bottom}
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

export default IntroLevel;
