module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    './index.js',
    '../react.js',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
  ],
  rules: {
    'react/prop-types': 'off',
  },
};
