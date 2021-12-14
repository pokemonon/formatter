module.exports = {
    extends: [
        // 'eslint:recommended',
        // 'plugin:import/recommended',
        // 'plugin:import/typescript',
        // 'plugin:@typescript-eslint/eslint-recommended',
        // 'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base',
    ],
    // parser: '@typescript-eslint/parser',
    // plugins: [
    //     '@typescript-eslint',
    // ],
    settings: {
        'import/resolver': {
            // https://www.npmjs.com/package/eslint-import-resolver-typescript
            // eslint-import-resolver-typescript
            // use paths defined in tsconfig.json....
            // 'typescript': {
            //     'alwaysTryTypes': true,
            //     'project': [
            //         'tsconfig.json',
            //         'packages/*/tsconfig.json',
            //     ],
            // },
        },
    },
    rules: {
        indent: 'off',
        '@typescript-eslint/indent': ['error', 4, {
            SwitchCase: 1,
        }],
        // // style
        // 'linebreak-style': ['error', 'unix'],
        // quotes: ['error', 'single'],
        // semi: ['error', 'always'],
        // 'comma-dangle': ['error', 'always-multiline'], // 对象字面量项尾不能有逗号
        // // 空格
        // // 兼容问题
        // indent: 0,
        // '@typescript-eslint/indent': ['error', 4],
        // 'key-spacing': ['error', {
        //     beforeColon: false,
        //     afterColon: true,
        // }], // 冒号后面的空格
        // 'array-bracket-spacing': ['error'],
        // 'object-curly-spacing': ['error', 'always'], // 对象内的空格
        // // 函数定义时括号前面要不要有空格
        // 'space-before-function-paren': ['error'],

        // // eslint error
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 'block-scoped-var': 'error', // 禁止在作用域外调用变量
        // eqeqeq: 'error', // 使用强等判断
        // 'class-methods-use-this': 'error', // 强制类方法使用 this
        // 'default-case': 'error', // 要求switch必须含有default
        // 'no-eq-null': 'error', // 禁止null进行弱比较
        // 'no-floating-decimal': 'error', // 强制先导0
        // 'no-iterator': 'error', // 禁止废弃属性 __iterator__
        // 'no-return-assign': 'error', // 禁止return中的赋值语句
        // 'no-useless-concat': 'error', // 禁止不必要的字符串拼接
        // 'no-use-before-define': 'error', // 禁止在变量声明前使用他们
        // 'no-duplicate-imports': 'error', // 禁止重复模块导入
        // 'no-useless-rename': 'error', // 禁止在import/export中解构引用为同名值
        // 'no-var': 'error', // 禁止 var
        // 'dot-location': ['error', 'property'], // 要求点操作符和属性放在同一行
        // 'guard-for-in': 'error', // 需要约束 for-in
        // 'no-alert': 'error', // 禁止 alert、confirm 和 prompt
        // 'prefer-const': 'error', // 能用const的地方使用const

        // // eslint warn
        // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 'no-sparse-arrays': 'warn', // 稀疏数组警告
        // 'no-template-curly-in-string': 'warn', // 模板字符串引用警告
        // 'no-empty-function': 'warn', // 空函数警告
        // 'prefer-rest-params': 'warn', // 推荐使用剩余参数而不是argument
        // 'prefer-template': 'warn', // 推荐使用模板字符串而不是字符串拼接
        // 'no-unreachable': 'warn', // 警告不可达代码
        // 'no-unused-vars': [
        //     'warn',
        //     // 捕获变量但不捕获参数
        //     { varsIgnorePattern: '.*', args: 'none' },
        // ],

        // // eslint off
        // 'no-await-in-loop': 'off', // 不禁止循环异步
        // 'no-fallthrough': 'off', // 不禁止case落空

        // '@typescript-eslint/explicit-module-boundary-types': 0,
        // '@typescript-eslint/no-var-requires': 0,
        // '@typescript-eslint/no-empty-function': 0,
        // '@typescript-eslint/no-non-null-assertion': 0,
        // '@typescript-eslint/ban-ts-comment': 0,

        // 'import/no-unresolved': 'warn',
        // 'import/order': ['error', {
        //     groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        // }],
    },
};
