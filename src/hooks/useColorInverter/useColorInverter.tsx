import { RGBAColor } from "../../contexts/SettingsContext/SettingsContext";

/**
 * Color inverter helper function type
 */
export type ColorInverter = (color: RGBAColor) => RGBAColor;

/**
 * Color inverter function
 *
 * @param r - 0 to 255 range of red RGB spectre
 * @param g - 0 to 255 range of green RGB spectre
 * @param b - 0 to 255 range of blue RGB spectre
 * @param a - 0 to 1 opacity parameter
 */
const invertColor: ColorInverter = ({ r, g, b, a }) => ({
  r: 255 - r,
  g: 255 - g,
  b: 255 - b,
  a,
});

/**
 * Hook that provides a color inverter helper to a component
 */
const useColorInverter = (): [ColorInverter] => {
  return [invertColor];
};

export default useColorInverter;
