module.exports = {
  root: true,
  extends: ["react-app", "plugin:prettier/recommended"],
  plugins: ["import", "prettier"],
  env: {
    "browser": true,
    "es6": true,
  },
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  rules: {
    "prettier/prettier": "error",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-eval": "error",
    "import/first": "error"
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        jest: true
      }
    }
  ]
};
