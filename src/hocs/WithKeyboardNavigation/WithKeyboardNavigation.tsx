import React, { useEffect } from "react";
// eslint-disable-next-line import/no-cycle
import useNavigation from "../../hooks/useNavigation/useNavigation";

/**
 * Keyboard navigation HOC
 * @param WrappedComponent - component to be enhanced with keyboard navigation
 * @constructor
 */
const WithKeyboardNavigation = (
  WrappedComponent: React.ComponentType<any>,
): React.ComponentType<any> => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [, nextLevel, previousLevel, resetLevels] = useNavigation();

  // eslint-disable-next-line react-hooks/rules-of-hooks
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

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <WrappedComponent {...props} />;
};

export default WithKeyboardNavigation;
