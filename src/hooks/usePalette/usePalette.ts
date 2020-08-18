import { RGBAColor } from "../../contexts/SettingsContext/SettingsContext";

type Palette = {
  color: RGBAColor;
  bgColor: RGBAColor;
  accent: RGBAColor;
  secondary: RGBAColor;
};

export const COLOR: RGBAColor = {
  r: 66,
  g: 66,
  b: 66,
  a: 1,
};

export const BG_COLOR: RGBAColor = {
  r: 254,
  g: 255,
  b: 234,
  a: 1,
};

export const ACCENT: RGBAColor = {
  r: 252,
  g: 252,
  b: 98,
  a: 1,
};

export const SECONDARY: RGBAColor = {
  r: 201,
  g: 201,
  b: 201,
  a: 1,
};

const usePalette = (): Palette => ({
  color: COLOR,
  bgColor: BG_COLOR,
  accent: ACCENT,
  secondary: SECONDARY,
});

export default usePalette;
