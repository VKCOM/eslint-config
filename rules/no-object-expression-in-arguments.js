/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    schema: [
      {
        type: 'object',
        properties: {
          onlyForFunctionsWithNames: {
            oneOf: [
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              {
                type: 'string',
              },
            ],
          },
        },
      },
    ],
  },
  create(context) {
    const options = context.options;
    /** @type {Set<string> | null} */
    let onlyForFunctionsWithNames = null;

    options.forEach((option) => {
      if ('onlyForFunctionsWithNames' in option) {
        onlyForFunctionsWithNames = new Set(
          typeof option.onlyForFunctionsWithNames === 'string'
            ? [option.onlyForFunctionsWithNames]
            : option.onlyForFunctionsWithNames
        );
      }
    });

    return {
      /** @param node {import('estree').CallExpression} */
      CallExpression(node) {
        if (
          onlyForFunctionsWithNames &&
          !onlyForFunctionsWithNames.has(node.callee.name)
        ) {
          return;
        }

        if (node.arguments.some(isObjectExpression)) {
          context.report({
            node,
            message: `Do not use object expression in arguments${
              onlyForFunctionsWithNames ? ` of ${node.callee.name}` : ''
            }.`,
          });
        }
      },
    };
  },
};

/** @param arg {import('estree').Expression | import('estree').SpreadElement} */
function isObjectExpression({ type }) {
  return type === 'ObjectExpression';
}
