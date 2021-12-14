module.exports = {
    root: true,
    extends: [
        '../../lib/configs/common.js',
        '../../lib/configs/vue2.js',
    ],
    settings: {
        'import/resolver': {
            alias: [
                ['@', `${__dirname}/src`],
            ],
        },
    },
};
