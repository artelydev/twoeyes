import React from "react";
import { useLocalStorage } from "react-use";

/**
 * Navigation context props type
 */
export type NavigationContextProps = [number, Function];

/**
 * Navigation context to be used to provide navigation levels functionality
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
const NavigationContext = React.createContext<NavigationContextProps>([0, () => {}]);

/**
 * Navigation context provider to share the levels functionality
 * @param props - to be passed through
 */
export const NavigationContextProvider = (props: any) => {
  const [currentLevelCounter, setCurrentLevelCounter] = useLocalStorage("CURRENT_LEVEL", 0);

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <NavigationContext.Provider
      value={[currentLevelCounter || 0, setCurrentLevelCounter]}
      {...props}
    />
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

export default NavigationContext;
