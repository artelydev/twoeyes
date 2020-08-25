import React, { useEffect } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { ArrowBack, ArrowForward, Cached, Settings } from "@material-ui/icons";
import styles from "./Navigation.module.scss";
import useNavigation from "../../hooks/useNavigation/useNavigation";

export type NavigationProps = {
  bgColor: string;
  color: string;
};

const Navigation: React.FC<NavigationProps> = ({ bgColor, color }) => {
  const [, nextLevel, previousLevel, resetLevels, goToSettings] = useNavigation();

  useEffect(() => {
    const enableNavigation = ({ keyCode }: KeyboardEvent) => {
      switch (keyCode) {
        case 13:
        case 39:
          return nextLevel();
        case 37:
          return previousLevel();
        case 8:
          return resetLevels();
        default:
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          return () => {};
      }
    };

    document.addEventListener("keydown", enableNavigation, false);

    return () => {
      document.removeEventListener("keydown", enableNavigation, false);
    };
  }, [nextLevel, previousLevel, resetLevels]);

  return (
    <BottomNavigation className={styles.navigation} style={{ backgroundColor: bgColor }} showLabels>
      <BottomNavigationAction
        style={{ color }}
        onClick={previousLevel as any}
        label="Back"
        icon={<ArrowBack />}
      />
      <BottomNavigationAction
        style={{ color }}
        onClick={nextLevel as any}
        label="Forward"
        icon={<ArrowForward />}
      />
      <BottomNavigationAction
        style={{ color }}
        onClick={goToSettings as any}
        label="Settings"
        icon={<Settings />}
      />
      <BottomNavigationAction
        style={{ color }}
        onClick={resetLevels as any}
        label="Reset"
        icon={<Cached />}
      />
    </BottomNavigation>
  );
};

export default Navigation;
