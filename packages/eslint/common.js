module.exports = {
  // extends: [
  //     'airbnb/base',
  //     'plugin:import/recommended',
  //     'plugin:jsx-a11y/recommended', // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules
  // ],
//   plugins: [
//     'react', // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
//   ],
  // parserOptions: {
  //   ecmaVersion: 2020,
  //   ecmaFeatures: {
  //     jsx: true,
  //     modules: true,
  //   },
  // },
  // plugins: [
  //   'jsx-a11y',
  // ],
  extends: [
    '@antfu/eslint-config-basic',
    // 'plugin:jsx-a11y/recommended',
  ],
  rules: {
    /**
     * 语法规范
     */
    'no-unused-vars': 'warn', // 变量没有使用
    'no-console': 'warn',
    'n/no-path-concat': 'warn',
    'no-unmodified-loop-condition': 'off',
    // 'no-restricted-syntax': 'off',
    // 'no-param-reassign': 'off',
    // 'no-await-in-loop': 'off',
    // 'no-nested-ternary': 'off',
    // 'no-plusplus': 'off',
    // 'no-underscore-dangle': 'off',
    // 'no-cond-assign': 'off', // disallow assignment operators in conditional statements
    // 'no-continue': 'off',
    // 'no-restricted-globals': 'warn',
    // 'no-multi-assign': 'off',
    // 'no-lonely-if': 'off',
    // 'no-inner-declarations': 'off',
    // 'no-use-before-define': 'off',
    // 'no-shadow': 'off',
    // 'no-unused-expressions': 'off',
    // 'default-param-last': 'off',
    // 'consistent-return': 'off',
    // 'prefer-destructuring': 'off',
    // 'prefer-template': 'warn',
    // 'prefer-const': 'warn',
    // 'guard-for-in': 'warn',
    // 'symbol-description': 'warn',
    // 'operator-linebreak': ['error', 'after'], // 操作符换行处理
    // 'global-require': 'off',
    // 'class-methods-use-this': 'off',
    // 'max-classes-per-file': 'off',
    // 'no-new': 'off',

    /**
     * 格式规范
     */
    // specify curly brace conventions for all control statements
    // https://eslint.org/docs/rules/curly
    'curly': ['error', 'multi-line'], // multiline
    // figure out the conflict with curly
    'antfu/if-newline': 'off',
    // 空格
    // 'indent': ['error', 4, {
    //     SwitchCase: 1,
    // }],
    // 'max-len': ['warn', {
    //     code: 250,
    //     ignoreComments: true,
    // }],
    // // import/export
    // 'import/prefer-default-export': 'off',
    // 'import/no-unresolved': 'warn',
    // 'import/order': ['error', {
    //   groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
    // }],
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
    // 'import/no-extraneous-dependencies': 'warn', // import的依赖需要存在于dependencies
    // 'import/no-cycle': 'off',
    // 'import/no-dynamic-require': 'off',

    /**
     * jsx
     */
    // 'react/jsx-closing-bracket-location': ['error', 'after-props'],
  },
}
