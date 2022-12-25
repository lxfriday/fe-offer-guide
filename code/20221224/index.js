const cjsData = require('./cjs')

console.log(require('./cjs'))
cjsData.a = 555
console.log(require('./cjs'))
cjsData.c.push('a')
console.log(require('./cjs'))