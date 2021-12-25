module.exports = {
    overrides: [
        {
            files: ['*.vue'],
            extends: 'plugin:vue/vue3-recommended',
            parserOptions: {
                extraFileExtensions: ['.vue'],
                parser: {
                    // Script parser for `<script>`
                    js: 'espree',
                    // Script parser for `<script lang="ts">`
                    ts: '@typescript-eslint/parser',
                },
            },
            rules: {
                ...require('./vue-common').rules,
                'vue/script-setup-uses-vars': 'error',
            },
        },
    ],
};
