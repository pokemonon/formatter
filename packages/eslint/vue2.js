module.exports = {
  extends: ['./typescript.js'],
  overrides: [
    {
      files: ['*.vue'],
      extends: [
        'plugin:vue/recommended',
      ],
      parserOptions: {
        extraFileExtensions: ['.vue'],
        parser: {
          // Script parser for `<script>`
          js: 'espree',
          // Script parser for `<script lang="ts">`
          ts: '@typescript-eslint/parser',
        },
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
          tsx: true,
        },
      },
      rules: {
        ...require('./vue-common').rules,
      },
    },
  ],
}
