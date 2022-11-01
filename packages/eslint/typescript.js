// const basic = require('@antfu/eslint-config-basic')

module.exports = {
  extends: [
    '@antfu/eslint-config-ts',
    './common.js',
  ],
  rules: {
    /**
     * 语法
     */
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',

    /**
     * 格式
     */
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
      ignoredNodes: [
        // 'TemplateLiteral *',
        // 'JSXElement',
        // 'JSXElement > *',
        // 'JSXAttribute',
        // 'JSXIdentifier',
        // 'JSXNamespacedName',
        // 'JSXMemberExpression',
        // 'JSXSpreadAttribute',
        // 'JSXExpressionContainer',
        // 'JSXOpeningElement',
        // 'JSXClosingElement',
        // 'JSXFragment',
        // 'JSXOpeningFragment',
        // 'JSXClosingFragment',
        // 'JSXText',
        // 'JSXEmptyExpression',
        // 'JSXSpreadChild',
        'TSTypeParameterInstantiation',
        'FunctionExpression > .params[decorators.length > 0]',
        'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
        'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
      ],
      offsetTernaryExpressions: true,
    }],
  },
}
