import { Palette } from "../usePalette";

const fakePalette: Palette = {
  color: {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  },
  bgColor: {
    r: 0,
    g: 10,
    b: 20,
    a: 0.5,
  },
  accent: {
    r: 15,
    g: 25,
    b: 35,
    a: 0.6,
  },
  secondary: {
    r: 45,
    g: 65,
    b: 75,
    a: 1,
  },
};

export default jest.fn().mockReturnValue(fakePalette);
