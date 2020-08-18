import React from "react";
import { SettingsContextProvider } from "../contexts/SettingsContext";
import { GlobalColorsContextProvider } from "../contexts/GlobalColorsContext/GlobalColorsContext";
import { NavigationContextProvider } from "../contexts/NavigationContext/NavigationContext";

/**
 * Application providers to use contexts
 */
const AppProviders: React.ComponentType = React.memo(({ children }) => (
  <NavigationContextProvider>
    <GlobalColorsContextProvider>
      <SettingsContextProvider>{children}</SettingsContextProvider>
    </GlobalColorsContextProvider>
  </NavigationContextProvider>
));

export default AppProviders;
