const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    if(line.indexOf('.') !== -1) transformFromIp(line)
    else transformFromNumber(line)
  }
})();

function genZero(len, max) {
  let ret = "";
  for (let i = len; i < max; i++) {
    ret += "0";
  }
  return ret;
}

function transformFromIp(str) {
  const parts = str.split(".");
  let binaRet = "";
  for (let i = 0; i < 4; i++) {
    const bi = parseInt(parts[i], 10).toString(2);
    binaRet += genZero(bi.length, 8) + bi;
  }
  console.log(parseInt(binaRet, 2));
}
function transformFromNumber(str) {
  const bi = parseInt(str, 10).toString(2)
  const fullBi = genZero(bi.length, 32) + bi
  console.log(bi, fullBi)
  let ret = ''
  ret += parseInt(fullBi.slice(0, 8), 2) + '.'
  ret += parseInt(fullBi.slice(8, 16), 2) + '.'
  ret += parseInt(fullBi.slice(16, 24), 2) + '.'
  ret += parseInt(fullBi.slice(24, 32), 2)
  console.log(ret)
}