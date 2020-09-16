import { RGBColor } from "../../contexts/SettingsContext/SettingsContext";

/**
 * Color inverter helper function type
 */
export type ColorInverter = (color: RGBColor) => RGBColor;

/**
 * Color inverter function that uses YIQ conversion to determine contrast color
 *
 * @param r - 0 to 255 range of red RGB spectre
 * @param g - 0 to 255 range of green RGB spectre
 * @param b - 0 to 255 range of blue RGB spectre
 * @param a - 0 to 1 opacity parameter
 */
const invertColor: ColorInverter = ({ r, g, b }) => {
  const contrastRatio = Math.round(r * 0.299) + Math.round(g * 0.587) + Math.round(b * 0.114);

  return contrastRatio >= 128
    ? {
        r: 0,
        g: 0,
        b: 0,
      }
    : { r: 255, g: 255, b: 255 };
};

/**
 * Hook that provides a color inverter helper to a component
 */
const useColorInverter = (): [ColorInverter] => {
  return [invertColor];
};

export default useColorInverter;
