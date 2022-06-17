module.exports = {
    overrides: [
        {
            files: ['*.{ts,tsx}'],
            extends: [
                'airbnb-typescript/base',
            ],
            parserOptions: {
                ecmaFeatures: {
                    tsx: true,
                    modules: true,
                },
            },
            rules: {
                /**
                 * 语法
                 */
                '@typescript-eslint/no-use-before-define': 'off',
                '@typescript-eslint/naming-convention': 'off',
                '@typescript-eslint/no-shadow': 'off',
                '@typescript-eslint/default-param-last': 'off',
                '@typescript-eslint/no-unused-expressions': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                // ? typescript把common下的import覆盖了？？
                'import/no-extraneous-dependencies': 'warn', // import的依赖需要存在于dependencies

                /**
                 * 格式
                 */
                indent: 'off',
                '@typescript-eslint/indent': ['error', 4, {
                    SwitchCase: 1,
                    ignoredNodes: [
                        'FunctionExpression > .params[decorators.length > 0]',
                        'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
                        'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
                    ],
                }],
            },
        },
    ],
};
