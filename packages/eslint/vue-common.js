module.exports = {
    rules: {
        /**
         * 格式规范
         */
        // 属性换行
        'vue/max-attributes-per-line': ['error', {
            singleline: 2,
            multiline: 1,
        }],
        // 标签关闭号>不换行
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],
        // 缩进
        'vue/html-indent': ['error', 4],
        // 元素内的内容不强制换行
        'vue/singleline-html-element-content-newline': 'off',

        /**
         * 语法规范
         */
        'vue/multi-word-component-names': 'off',
        'vue/require-default-prop': 'off',
    },
};
