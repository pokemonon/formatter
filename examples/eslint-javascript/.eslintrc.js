module.exports = {
  root: true,
  extends: [
    '@pokemonon/formatter/common',
  ],
  settings: {
    'import/resolver': {
      alias: [
        ['@', `${__dirname}/src`],
      ],
    },
  },
}
