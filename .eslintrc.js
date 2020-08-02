module.exports = {
  extends: ["airbnb", "prettier", "prettier/react", "plugin:jest/recommended"],
  plugins: ["prettier"],
  rules: {
    "import/no-extraneous-dependencies": "off",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: ["airbnb-typescript-prettier", "plugin:jest/recommended"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "@typescript-eslint/no-empty-interface": "warn",
        "react/require-default-props": "off",
      },
      settings: {
        "import/resolver": {
          node: {
            moduleDirectory: ["node_modules"],
          },
        },
      },
    },
  ],
};
