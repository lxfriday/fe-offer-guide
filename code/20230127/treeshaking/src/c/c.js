export const c1 = 'c1'
export let c2 = 'c2'
export const cSayName = name => {
  c2 += 'hello c2'
  console.log('cSayName ' + name)
  return c2
}

export default {
  c1,
  c2,
  cSayName,
}
