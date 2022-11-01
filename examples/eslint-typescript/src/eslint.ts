if (true) {
  console.log('1')
}
else if (false) {
  console.log(1)
}

if (true) console.log(1)

const f = 'test'
require(`../packages/${f}/package.json`)

/**
 * no-unmodified-loop-condition
 */
function loop(flag) {
  let count = 0
  while (flag && count < 1) {
    console.log('loop')
    count++
  }
}
