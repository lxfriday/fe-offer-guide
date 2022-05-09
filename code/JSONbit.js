// 从 JSON 字符串中把大数变成字符串
const str = '[{"value":9223372036854775807,"v2":123},{"value":9223372036854775555,"v2":666}]'

// 用函数
const jsonStr = str.replace(/"value":(\d*),"v2"/g, function (match, p1) {
  console.log({match, p1});
  return `"value":"${p1}","v2"`
});
console.log('jsonStr', JSON.parse(jsonStr));

// 用字符串
const jsonStr2 = str.replace(/"value":(\d*),"v2"/g, '"value":"$1","v2"')
console.log('jsonStr2', JSON.parse(jsonStr2));

// 逆向
// 把大数字符串转成 JSON
const obj = [
  { value: '9223372036854775807', v2: 123 },
  { value: '9223372036854775555', v2: 666 } 
]

const objStr = JSON.stringify(obj)
const realJSONStr = objStr.replace(/"value":"(\d*)","v2"/g, '"value":$1,"v2"')
console.log('realJSONStr', realJSONStr);