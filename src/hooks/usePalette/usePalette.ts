import { RGBColor } from "../../contexts/SettingsContext/SettingsContext";

/**
 * Palette object type
 */
export type Palette = {
  color: RGBColor;
  bgColor: RGBColor;
  accent: RGBColor;
  secondary: RGBColor;
};

/**
 * Default palette font color RGB object
 */
export const COLOR: RGBColor = {
  r: 66,
  g: 66,
  b: 66,
};

/**
 * Default palette background color RGB object
 */
export const BG_COLOR: RGBColor = {
  r: 250,
  g: 250,
  b: 250,
};

/**
 * Default palette accent color RGB object
 */
export const ACCENT: RGBColor = {
  r: 252,
  g: 252,
  b: 98,
};

/**
 * Default palette secondary color RGB object
 */
export const SECONDARY: RGBColor = {
  r: 201,
  g: 201,
  b: 201,
};

/**
 * Hook that enables a component ot use a shared palette
 */
const usePalette = (): Palette => ({
  color: COLOR,
  bgColor: BG_COLOR,
  accent: ACCENT,
  secondary: SECONDARY,
});

export default usePalette;
