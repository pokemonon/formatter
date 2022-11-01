module.exports = {
  extends: [
    '@antfu/eslint-config-basic',
  ],
  rules: {
    /**
     * 语法规范
     */
    'no-unused-vars': 'warn', // 变量没有使用
    'no-console': 'warn',
    'n/no-path-concat': 'warn',
    'no-unmodified-loop-condition': 'off',

    /**
     * 格式规范
     */
    // specify curly brace conventions for all control statements
    // https://eslint.org/docs/rules/curly
    'curly': ['error', 'multi-line'], // multiline
    // figure out the conflict with curly
    'antfu/if-newline': 'off',
  },
}
