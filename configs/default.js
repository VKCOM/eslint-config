module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['@vkontakte/eslint-plugin'],
  extends: ['google'],
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

    // Require use of semicolons
    // https://eslint.org/docs/rules/semi
    'semi': ['error', 'always'],

    // Enforce spacing before and after semicolons
    // https://eslint.org/docs/rules/semi-spacing
    'semi-spacing': ['error', { before: false, after: true }],

    // Enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    'semi-style': ['error', 'last'],

    // Disallow unnecessary semicolons
    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'error',

    // Disallow duplicate imports
    'no-duplicate-imports': 'error',

    // Require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    'eqeqeq': ['error', 'always', { null: 'ignore' }],

    // Enforce spaces inside of blocks after opening block and before closing block
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // Disallow unreachable code after return, throw, continue, and break statements
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // Disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // https://eslint.org/docs/rules/no-empty
    'no-empty': ['error', { allowEmptyCatch: true }],
  },
};
