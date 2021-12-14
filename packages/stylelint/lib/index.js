module.exports = {
    extends: [
        'stylelint-config-standard',
    ],
    plugins: ['stylelint-order'],
    rules: {
        indentation: 4,
        'value-list-comma-space-after': 'always-single-line',
        'declaration-colon-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-list-comma-newline-after': 'always',
        'declaration-block-semicolon-newline-after': 'always-multi-line',
        'declaration-block-trailing-semicolon': 'always',
        'selector-pseudo-element-colon-notation': 'double',
        'color-no-invalid-hex': true,
        'color-hex-length': 'short',
        'color-hex-case': 'lower',

        'string-quotes': 'single', // 单引号
        'at-rule-empty-line-before': null,
        'at-rule-no-unknown': null,
        'at-rule-name-case': 'lower', // 指定@规则名的大小写
        'length-zero-no-unit': true, // 禁止零长度的单位（可自动修复）
        'number-leading-zero': 'never', // 小数不带0
        'max-nesting-depth': 3,
        'order/properties-order': [ // 规则顺序
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'display',
            'float',
            'width',
            'height',
            'max-width',
            'max-height',
            'min-width',
            'min-height',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'margin-collapse',
            'margin-top-collapse',
            'margin-right-collapse',
            'margin-bottom-collapse',
            'margin-left-collapse',
            'overflow',
            'overflow-x',
            'overflow-y',
            'clip',
            'clear',
            'font',
            'font-family',
            'font-size',
            'font-smoothing',
            'osx-font-smoothing',
            'font-style',
            'font-weight',
            'line-height',
            'letter-spacing',
            'word-spacing',
            'color',
            'text-align',
            'text-decoration',
            'text-indent',
            'text-overflow',
            'text-rendering',
            'text-size-adjust',
            'text-shadow',
            'text-transform',
            'word-break',
            'word-wrap',
            'white-space',
            'vertical-align',
            'list-style',
            'list-style-type',
            'list-style-position',
            'list-style-image',
            'pointer-events',
            'cursor',
            'background',
            'background-color',
            'border',
            'border-radius',
            'content',
            'outline',
            'outline-offset',
            'opacity',
            'filter',
            'visibility',
            'size',
            'transform',
        ],
    },
    overrides: [
        {
            files: ['**/*.vue'],
            customSyntax: 'postcss-html',
        },
        {
            files: ['**/*.less'],
            customSyntax: 'postcss-less',
        },
    ],
};
