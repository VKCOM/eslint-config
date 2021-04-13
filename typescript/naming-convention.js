const namingConventionOptions = ['error',
  {
    selector: 'default',
    format: ['camelCase'],
  },

  {
    selector: 'variable',
    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },

  // For the function variables enable PascalCase
  {
    selector: 'variable',
    types: ['function'],
    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },

  {
    selector: 'parameter',
    format: ['camelCase', 'PascalCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },

  // Ignore destructured names
  {
    selector: ['variable', 'parameter'],
    modifiers: ['destructured'],
    format: null,
  },

  // Object literal properties and type properties can be in any format
  {
    selector: [
      'objectLiteralProperty',
      'typeProperty',
    ],
    format: null,
  },

  {
    selector: ['objectLiteralMethod'],
    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },

  {
    selector: 'enumMember',
    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    leadingUnderscore: 'forbid',
    trailingUnderscore: 'forbid',
  },

  {
    selector: 'function',
    format: ['camelCase', 'PascalCase'],
  },

  {
    selector: 'class',
    format: ['PascalCase'],
  },

  {
    selector: 'classMethod',
    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'allow',
  },

  {
    selector: 'classProperty',
    format: null,
    leadingUnderscore: 'allow',
    trailingUnderscore: 'allow',
  },

  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },

  {
    selector: 'enum',
    format: ['UPPER_CASE', 'PascalCase'],
    leadingUnderscore: 'forbid',
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
