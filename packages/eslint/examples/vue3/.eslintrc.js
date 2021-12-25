module.exports = {
    root: true,
    extends: [
        '../../common.js',
        '../../typescript.js',
        '../../vue3.js',
    ],
    parserOptions: {
        project: 'tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
    },
    settings: {
        'import/resolver': {
            // https://www.npmjs.com/package/eslint-import-resolver-typescript
            // eslint-import-resolver-typescript
            // use paths defined in tsconfig.json....
            typescript: {
                alwaysTryTypes: true,
                project: [
                    `${__dirname}/tsconfig.json`,
                ],
            },
        },
    },
};
