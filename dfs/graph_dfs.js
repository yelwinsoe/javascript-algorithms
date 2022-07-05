//   A       H
// B   C   G   I   K
//   D   E   J
//       F  



const findEndVertices = (edges) => {
  const e = {}
  const vertices = []
  const rightVertices = []

  for (let i=0; i<edges.length; i++) {
    const left = edges[i][0]
    const right = edges[i][1]
    if (left in e) {
      e[left].push(right)
    } else {
      e[left] = [right]
    }

    if (!vertices.includes(left)) vertices.push(left)
    if (!vertices.includes(right)) vertices.push(right)
    
    if (!rightVertices.includes(right)) rightVertices.push(right)
  }

  const startingVertices = []
  for (let j=0; j<vertices.length; j++) {
    if (!rightVertices.includes(vertices[j])) startingVertices.push(vertices[j])
  }

  const result = []
  for (let k=0; k<startingVertices.length; k++) {
    dfs(startingVertices[k])
  }

  function dfs(vertex) {
    if (vertex in e) {
      for (let v of e[vertex]) {
        dfs(v)
      }
    } else {
      if (!result.includes(vertex)) result.push(vertex)
    }
  }

  return result
}

// Find ending vertices
// Result : F, J, K
const edges =[
  ['A', 'B'],
  ['A', 'C'],
  ['B', 'D'],
  ['C', 'D'],
  ['C', 'E'],
  ['D', 'E'],
  ['E', 'F'],
  ['G', 'E'],
  ['G', 'J'],
  ['H', 'G'],
  ['H', 'I'],
  ['I', 'K'],
  ['I', 'J']
]

console.log(findEndVertices(edges))