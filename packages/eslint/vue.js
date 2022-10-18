const { getPackageInfoSync } = require('@pokemonon/knife/node')

const vueInfo = getPackageInfoSync('vue')
const vueVersion = vueInfo && vueInfo.version ? +(vueInfo.version.match(/(\d+?)/)[1]) : 3

module.exports = {
  extends: [
    './typescript.js',
    vueVersion === 3 ? './vue3.js' : '.vue2.js',
  ],
}
