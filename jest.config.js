module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testPathIgnorePatterns: ["node_modules", "/.cache/"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  globals: {
    __PATH_PREFIX__: "",
  },
  setupFiles: ["<rootDir>/loadershim.js"],
};
