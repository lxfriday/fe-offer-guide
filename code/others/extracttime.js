function extractTime(timeStr) {
  const t = new Date(timeStr)
  return[t.getFullYear(), t.getMonth() + 1, t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()]
}
console.log(extractTime('2020-02-08 12:13:14'));
console.log(extractTime('2020-01-31 13:13:14'));