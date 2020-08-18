import { RGBAColor } from "../../contexts/SettingsContext/SettingsContext";

type ColorInverter = (color: RGBAColor) => RGBAColor;

const invertColor: ColorInverter = ({ r, g, b, a }) => ({
  r: 255 - r,
  g: 255 - g,
  b: 255 - b,
  a,
});

const useColorInverter = (): [ColorInverter] => {
  return [invertColor];
};

export default useColorInverter;
