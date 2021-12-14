module.exports = {
    root: true,
    extends: [
        '../../common.js',
        '../../typescript.js',
    ],
    parserOptions: {
        project: `${__dirname}/tsconfig.eslint.json`,
    },
    settings: {
        'import/resolver': {
            // https://www.npmjs.com/package/eslint-import-resolver-typescript
            // eslint-import-resolver-typescript
            // use paths defined in tsconfig.json....
            typescript: {
                alwaysTryTypes: true,
                project: [
                    `${__dirname}/tsconfig.eslint.json`,
                ],
            },
        },
    },
};
