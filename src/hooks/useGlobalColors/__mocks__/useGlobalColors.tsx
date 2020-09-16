import { GlobalColorsContextProps } from "../../../contexts/GlobalColorsContext/GlobalColorsContext";

const globalColorsHelpers: GlobalColorsContextProps = [
  [
    {
      r: 255,
      g: 255,
      b: 255,
    },
    jest.fn(),
    jest.fn(),
  ],
  [{ r: 0, g: 0, b: 0 }, jest.fn(), jest.fn()],
];

export default jest.fn().mockReturnValue(globalColorsHelpers);
