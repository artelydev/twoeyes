import { useContext } from "react";
import SettingsContext from "../../contexts/SettingsContext";

/**
 * Hook that enables a component to use StepsContext
 */
const useSettings = () => useContext(SettingsContext);

export default useSettings;
