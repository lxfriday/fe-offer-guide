function parseUrl(url: string) {
  const urlObj = new URL(url)
  const ret = {
    protocol: urlObj.protocol,
    host: urlObj.host,
    pathname: urlObj.pathname,
    hash: urlObj.hash,
    port: urlObj.port,
    query: <{[key: string]: string}>{}
  }

  const urlSplit = url.split('?')
  if (urlSplit.length > 1) {
    const search = urlSplit[1]
    const usp = new URLSearchParams(search)
    const query = <{[key: string]: string}>{}
    for(const [k, v] of usp.entries()) {
      query[k] = v
    }
    ret.query = query
  }
  return ret
}

console.log(
  parseUrl('https://juejin.cn/post/6844904032826294286#heading-42?a=1&b=2'),
)
