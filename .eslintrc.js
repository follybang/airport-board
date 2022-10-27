module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb", ["airbnb", "airbnb/hooks"]],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
