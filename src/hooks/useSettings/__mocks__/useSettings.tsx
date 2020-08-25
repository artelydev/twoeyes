import { SettingsContextProps } from "../../../contexts/SettingsContext/SettingsContext";

const fakeSettings: SettingsContextProps = {
  rightLense: {
    r: 0,
    g: 255,
    b: 255,
    a: 1,
  },
  changeRightLense: jest.fn(),
  leftLense: {
    r: 255,
    g: 0,
    b: 0,
    a: 1,
  },
  changeLeftLense: jest.fn(),
};

export default jest.fn().mockReturnValue(fakeSettings);
