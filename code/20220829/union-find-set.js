function find(parent, index) {
  if (parent[index] !== index) {
    parent[index] = find(parent, parent[index])
  }
  return parent[index]
}

function union(parent, index1, index2) {
  parent[find(parent, index1)] = find(parent, index2)
}

function findRedundantConnection(edges) {
  const n = edges.length
  const parent = new Array(n + 1).fill(0).map((v, i) => i)
  for (let i = 0; i < n; i++) {
    const edge = edges[i]
    const node1 = edge[0]
    const node2 = edge[1]
    if (find(parent, node1) !== find(parent, node2)) {
      union(parent, node1, node2)
    } else {
      return edge
    }
    console.log(JSON.stringify(parent))
  }
  return [0]
}

findRedundantConnection([
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
  [1, 8],
  [1, 9],
  [1, 10],
  [1, 11],
  [10, 11],
])
