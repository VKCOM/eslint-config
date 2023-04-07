module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['plugin:@vkontakte/eslint-plugin/default'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
    'react/prop-types': 2,
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-curly-brace-presence': 'error',

    // Validate whitespace in and around the JSX opening and closing brackets
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],

    // Enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': ['error', 'prefer-double'],

    // Disallow spaces inside of curly braces in JSX attributes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-curly-spacing': [
      'error',
      { when: 'never', children: true, allowMultiline: true },
    ],

    '@vkontakte/no-object-expression-in-arguments': [
      'error',
      {
        onlyForFunctionsWithNames: ['classNames'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
