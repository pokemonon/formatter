module.exports = {
    root: true,
    extends: [
        '../../lib/configs/common.js',
    ],
    settings: {
        'import/resolver': {
            alias: [
                ['@', `${__dirname}/src`],
            ],
        },
    },
};
