const namingConventionOptions = ['error',
  // Default format for all selectors - camelCase
  {
    selector: 'default',
    format: ['camelCase'],
  },

  // Variables (rule also includes function variables such as React function components)
  {
    selector: 'variable',
    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },

  // Functions
  {
    selector: 'function',
    format: ['camelCase', 'PascalCase'],
    trailingUnderscore: 'forbid',
  },

  // Parameters
  {
    selector: [
      'parameter',
      'parameterProperty',
    ],
    format: ['camelCase', 'PascalCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },

  // Classes
  // TODO: Add rule for '@typescript-eslint/class-name-casing': ['error', { allowUnderscorePrefix: true }]
  // Now there is no ability to select class variables like `const Foo = class Bar {}`
  // https://github.com/typescript-eslint/typescript-eslint/issues/1485
  {
    selector: 'class',
    format: ['PascalCase'],
    trailingUnderscore: 'forbid',
  },

  // TypeScript types, interfaces and enums
  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },

  // Enums
  {
    selector: 'enum',
    format: ['UPPER_CASE', 'PascalCase'],
    leadingUnderscore: 'forbid',
    trailingUnderscore: 'forbid',
  },

  // Ignore destructured names for variables and parameters
  {
    selector: ['variable', 'parameter'],
    modifiers: ['destructured'],
    format: null,
  },

  // Object literal properties and type properties can be in any format
  {
    selector: [
      'classProperty',
      'objectLiteralProperty',
      'typeProperty',
    ],
    format: null,
  },

  // Enum members
  {
    selector: 'enumMember',
    format: null,
    leadingUnderscore: 'forbid',
    trailingUnderscore: 'forbid',
  },

  // Methods
  {
    selector: [
      'method',
    ],
    format: ['camelCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },

  {
    selector: [
      'objectLiteralMethod',
    ],
    format: ['camelCase', 'PascalCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },

  // Ignore properties that require quotes
  {
    selector: [
      'classProperty',
      'objectLiteralProperty',
      'typeProperty',
      'classMethod',
      'objectLiteralMethod',
      'typeMethod',
      'accessor',
      'enumMember',
    ],
    format: null,
    modifiers: ['requiresQuotes'],
  },
];

module.exports = {
  namingConventionOptions,
};
