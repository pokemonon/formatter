module.exports = {
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'airbnb-typescript/base',
            ],
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

                /**
                 * 格式
                 */
                indent: 'off',
                '@typescript-eslint/indent': ['error', 4, {
                    SwitchCase: 1,
                }],
            },
        },
    ],
};
