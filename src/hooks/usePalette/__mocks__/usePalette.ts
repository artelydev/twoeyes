import { Palette } from "../usePalette";

const fakePalette: Palette = {
  color: {
    r: 255,
    g: 255,
    b: 255,
  },
  bgColor: {
    r: 0,
    g: 10,
    b: 20,
  },
  accent: {
    r: 15,
    g: 25,
    b: 35,
  },
  secondary: {
    r: 45,
    g: 65,
    b: 75,
  },
};

export default jest.fn().mockReturnValue(fakePalette);
