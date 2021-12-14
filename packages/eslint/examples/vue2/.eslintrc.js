module.exports = {
    root: true,
    extends: [
        '../../common.js',
        '../../vue2.js',
    ],
    settings: {
        'import/resolver': {
            alias: [
                ['@', `${__dirname}/src`],
            ],
        },
    },
};
