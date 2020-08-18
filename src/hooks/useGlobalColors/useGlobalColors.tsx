import { useContext } from "react";
import GlobalColorsContext from "../../contexts/GlobalColorsContext/GlobalColorsContext";

const useGlobalColors = () => useContext(GlobalColorsContext);

export default useGlobalColors;
