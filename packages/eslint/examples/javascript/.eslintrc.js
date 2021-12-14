module.exports = {
    root: true,
    extends: [
        '../../common.js',
    ],
    settings: {
        'import/resolver': {
            alias: [
                ['@', `${__dirname}/src`],
            ],
        },
    },
};
