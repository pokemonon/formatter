module.exports = {
    ...require('./vue-common'),
    extends: 'plugin:vue/recommended',
    parserOptions: {
        parser: {
            // Script parser for `<script>`
            js: 'espree',
            // Script parser for `<script lang="ts">`
            ts: '@typescript-eslint/parser',
        },
    },
};
