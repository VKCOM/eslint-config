module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    '../react.js',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react

    // Include the base TS config at the very end,
    // because the rules from ../react.js extend the base config for JS and erase some rules
    './index.js',
  ],
  rules: {
    'react/prop-types': 'off',
  },
};
