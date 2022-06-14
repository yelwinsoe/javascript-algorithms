// WHAT ARE GRAPHS?
// A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

// Nodes
// + 
// Connections


class Graph {
  constructor () {
    this.adjacencyList = {}
  }

  addVertex (vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  // Adding an edge
  // The function should accept two vertices, vertex1 and vertex2
  // Find the vertex1 in the adjacency list and push vertex2 to the array
  // Find the vertex2 in the adjacency list and push vertex1 to the array
  addEdge (vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2)
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1)
    }
  }

  // Removing an edge
  // Accept two vertices, vertex1 and vertex2
  // Remove vertex2 from vertex1
  // Remove vertex1 from vertex2
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => {
      return v !== vertex2
    })
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => {
      return v !== vertex1
    })
  }

  // Removing a vertex
  // Accept a vertex
  // Loop through the vertices in the adjacency list for that vertex and remove the vertex
  // Delete the key from the adjacencyList
  removeVertex (vertex) {
    for (let i in this.adjacencyList[vertex]) {
      this.removeEdge(this.adjacencyList[vertex][i], vertex)
    }
    delete this.adjacencyList[vertex]
  }

  // DFS pseudocode - recursive
  // DFS (vertex):
  //   if vertex is empty
  //     return (no node)
  //   add vertex to results list
  //   mark vertex as visited
  //   for each neighbor in vertex's neighbors:
  //     if neighbor is not visited:
  //       recursively call DFS on neighbor


  // DFS pseudocode - comprehensive
  // create a function that accept a node
  // create a list to store the traversal result
  // create an object to store visited vertices
  // create a helper function which accepts a vertex
  //   return undefined if there's no vertex
  //   push the current node to the result array and set as visited (by inserting into the object)
  //   loop over all of the adjacency list of the vertext
  //     if those value are not visited, recursively invoke the helper function with the vertext
  //   invoke the helper function with the starting vertex

  DFS (vertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function traversalHelper(vertex){
      if (!adjacencyList[vertex]) return null
      result.push(vertex)
      visited[vertex] = true
      for (let i=0; i<adjacencyList[vertex].length; i++) {
        let currentVertex = adjacencyList[vertex][i]
        if (!visited[currentVertex]) {
          return traversalHelper(currentVertex)
        }
      }
    })(vertex);

    return result
  }



  // DFS pseudocode - iteratively
  // DFSiterative(start):
  //   let S be a stack
  //   S.push(start)
  //   while S is not empty:
  //     vertex = S.pop()
  //     if vertext is not labeled as discovered:
  //       visit vertex (add to result list)
  //       label vertext as discovered
  //       for each of vertex's neighbors, N do
  //         S.push(N)

  DFSiterative(start) {
    if (!this.adjacencyList[start]) return null
    const S = [start] // Stack
    const discovered = {}
    const result = []
    while (S.length > 0) {
      const tempVertex = S.pop()
      if (!discovered[tempVertex]) {
        result.push(tempVertex)
        discovered[tempVertex] = true
        for (let i=0; i<this.adjacencyList[tempVertex].length; i++) {
          S.push(this.adjacencyList[tempVertex][i])
        }
      }
    }
    return result
  }

  // BFS psuedocode
  BFSiterative(start) {
    if (!this.adjacencyList[start]) return null
    const Q = [start] // Queue
    const discovered = {}
    const result = []
    while (Q.length > 0) {
      const tempVertex = Q.shift()
      if (!discovered[tempVertex]) {
        result.push(tempVertex)
        discovered[tempVertex] = true
        for (let i=0; i<this.adjacencyList[tempVertex].length; i++) {
          Q.push(this.adjacencyList[tempVertex][i])
        }
      }
    }
    return result
  }

}

const g = new Graph()
// g.addVertex('Tokyo')
// g.addVertex('New York')
// g.addVertex('Dallas')
// console.log('After add vertices ...')
// console.log(g)
// console.log('\n')

// console.log('After add edge')
// g.addEdge('Tokyo', 'New York')
// g.addEdge('Dallas', 'New York')
// console.log(g)
// console.log('\n')

// console.log('After remove edge')
// g.removeEdge('Tokyo', 'New York')
// console.log(g)
// console.log('\n')

// console.log('After remove vertex')
// g.removeVertex('New York')
// console.log(g)

// DFS test
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

console.log(g)

// result = g.DFS('A')
// console.log(result)


// result = g.DFSiterative('A')
// console.log(result)

// BFS test
result = g.BFSiterative('A')
console.log(result)