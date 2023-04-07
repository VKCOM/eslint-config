module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@vkontakte/eslint-plugin/react',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react

    // Include the base TS config at the very end,
    // because the rules from ../react.js extend the base config for JS and erase some rules
    'plugin:@vkontakte/eslint-plugin/typescript',
  ],
  rules: {
    'react/prop-types': 'off',
  },
};
