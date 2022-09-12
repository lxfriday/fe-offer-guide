const calcEquation = function (equations, values, queries) {
  const gridMap = new Map()
  const relations = []
  function gridMapSet(c1, c2, v, isInitial, c0) {
    relations.push(`${c1}/${c2} c0:${c0} isInitial:${isInitial}`)
    if (gridMap.has(c1)) {
      gridMap.get(c1).set(c2, v)
    } else {
      gridMap.set(c1, new Map([[c2, v]]))
    }
  }
  const chars = new Set()
  for (let i = 0; i < equations.length; i++) {
    const [c1, c2] = equations[i]
    chars.add(c1)
    chars.add(c2)
    gridMapSet(c1, c1, 1, true)
    gridMapSet(c2, c2, 1, true)
    gridMapSet(c1, c2, values[i], true)
    gridMapSet(c2, c1, 1 / values[i], true)
  }
  const scanPath = []
  for (let c0 of chars) {
    for (let c1 of chars) {
      for (let c2 of chars) {
        scanPath.push(`${c1} / ${c2}: c1 -> ${c1}, c0 -> ${c0}, c2 -> ${c2}`)
        if (c1 === c2 || gridMap.get(c1).has(c2)) continue
        if (gridMap.get(c1).has(c0) && gridMap.get(c0).has(c2)) {
          gridMapSet(
            c1,
            c2,
            gridMap.get(c1).get(c0) * gridMap.get(c0).get(c2),
            false,
            c0,
          )
        }
      }
    }
  }
  const res = []
  for (let i = 0; i < queries.length; i++) {
    const [c1, c2] = queries[i]
    if (gridMap.has(c1) && gridMap.get(c1).has(c2)) {
      res.push(gridMap.get(c1).get(c2))
    } else {
      res.push(-1)
    }
  }
  console.log(relations)
  //   console.log(chars)
  //   console.log(scanPath)
  //   console.log(gridMap)
  return res
}

calcEquation(
  [
    ['a', 'b'],
    ['b', 'c'],
    ['x', 'z'],
    ['g', 'z'],
    ['a', 'g'],
  ],
  [2.0, 3.0, 5.0, 6.0, 4.0],
  [['c', 'x']],
)

// Map(6) {
//   'a' => Map(6) {
//     'a' => 1,
//     'b' => 2,
//     'g' => 4,
//     'c' => 6,
//     'x' => 4.800000000000001,
//     'z' => 24
//   },
//   'b' => Map(6) {
//     'b' => 1,
//     'a' => 0.5,
//     'c' => 3,
//     'g' => 2,
//     'x' => 2.4000000000000004,
//     'z' => 12
//   },
//   'c' => Map(6) {
//     'c' => 1,
//     'b' => 0.3333333333333333,
//     'a' => 0.16666666666666666,
//     'g' => 0.6666666666666666,
//     'x' => 0.8,
//     'z' => 4
//   },
//   'x' => Map(6) {
//     'x' => 1,
//     'z' => 5,
//     'g' => 0.8333333333333333,
//     'a' => 0.20833333333333331,
//     'b' => 0.41666666666666663,
//     'c' => 1.25
//   },
//   'z' => Map(6) {
//     'z' => 1,
//     'x' => 0.2,
//     'g' => 0.16666666666666666,
//     'a' => 0.041666666666666664,
//     'b' => 0.08333333333333333,
//     'c' => 0.25
//   },
//   'g' => Map(6) {
//     'g' => 1,
//     'z' => 6,
//     'a' => 0.25,
//     'b' => 0.5,
//     'c' => 1.5,
//     'x' => 1.2000000000000002
//   }
// }
