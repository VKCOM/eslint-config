module.exports = {
  parser: 'babel-eslint',
  extends: [
    'google',
  ],
  rules: {
    'require-jsdoc': 'off',
    'comma-dangle': ['warn', 'always-multiline'],
    'no-undef': 'error',
    'space-infix-ops': ['error', { int32Hint: false }],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', 180, 2, { ignoreTemplateLiterals: true }],
    'curly': [2, 'all'],
    'no-octal': 'error',
    'no-eval': 'error',
    'no-invalid-this': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-global-assign': 'error',

    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'camelcase': ['error', { properties: 'never', ignoreDestructuring: true }],
    'func-call-spacing': ['error', 'never'],
    'no-array-constructor': 'error',
    'no-unused-vars': ['error', { ignoreRestSiblings: true, args: 'none' }],
    'semi': ['error', 'always'],

    // Disallow duplicate imports
    'no-duplicate-imports': 'error',

    // Require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    "radix": "error",
    "object-shorthand": "error",
    "prefer-const": "error"
  },
};
