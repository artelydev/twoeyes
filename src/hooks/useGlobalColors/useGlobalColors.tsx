import { useContext } from "react";
import GlobalColorsContext from "../../contexts/GlobalColorsContext/GlobalColorsContext";

/**
 * Hook that enables one to use global colors context
 */
const useGlobalColors = () => useContext(GlobalColorsContext);

export default useGlobalColors;
