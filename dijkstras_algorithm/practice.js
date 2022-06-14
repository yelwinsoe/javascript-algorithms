// One of the most famous and widely used algorithms around!
// It's use to find the shortest path between vertices on graph


// Simple priority queue

class PriorityQueue {
  constructor () {
    this.values = []
  }

  enqueue(val, priority) {
    this.values.push({val, priority})
    this.sort()
  }

  dequeue () {
    return this.values.shift()
  }

  sort () {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

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
  addEdge (vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push({
        node: vertex2,
        weight
      })
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push({
        node: vertex1,
        weight
      })
    }
  }

  // Dijkstra's psuedocode
  // Find the shortest path in graph

  // Every time we are to visit a new node, we pick the node with the smallest know distance to visit first
  // Once we've moved to the node we're going to visit, we look at each of its neighbors
  // For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
  // If the new total distance to a node is less than previous total, we store the new shorter distance for that node

  // create a function that accept a starting vertex and ending vertex
  // create an object to keep the shorted path at the moment (or distances) / setting the value in the object as infinity except the starting vertext, set it to 0
  // create another object to keep shortest previous distance with every vertex as key and value as null
  // starting looping as long as theer's value in the priority queue
  //   dequeue a vertext from the priority queue
  //   If the vertex is the same as the ending vertex - we are done
  //   otherwise
  //     calculate the distance to that vertex from the starting vertex
  //     if the distance is less than what's currently store in our distances object
  //       update the distances object with new lowe distance
  //       update the previous object to that vertex
  //       enqueue the vertex with the total distance from the start node

  shortestPath (start, finish) {
    const q = new PriorityQueue() // To store what to look for next
    const distances = {} // Store the current shortest distance
    const previous = {} // To store the chain for path / smallest path from current node
    const shortestPath = [] // To store the output

    for (let vertex in this.adjacencyList) {
      if (vertex == start) {
        distances[vertex] = 0 // Initial start vertext distance from itself
        q.enqueue(vertex, 0) // Initial smallest distance in queuing
      } else {
        distances[vertex] = Infinity
        q.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }
    
    while(q.values.length) {
      let smallest = q.dequeue().val

      if (smallest === finish) {
        // Construct the shortestPath
        while (previous[smallest]) {
          shortestPath.push(smallest)
          smallest = previous[smallest]
        }
        break
      }
      
      if (smallest || distances[smallest] !== Infinity) {
        const neighbors = this.adjacencyList[smallest]


        for (let neighbor in neighbors) {
          
          const currentlyCheckingNeighbor = neighbors[neighbor]
          const currentlyCheckingNode = currentlyCheckingNeighbor.node
          const updatedWeight = currentlyCheckingNeighbor.weight + distances[smallest]
          if (updatedWeight < distances[currentlyCheckingNode]) {
            distances[currentlyCheckingNode] = updatedWeight
            previous[currentlyCheckingNode] = smallest
            q.enqueue(currentlyCheckingNode, updatedWeight)
          }

        }
      }
    }

    return shortestPath.concat(start).reverse()

  }

}

const g = new Graph()

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B", 4);
g.addEdge("A","C", 2);
g.addEdge("B","E", 3);
g.addEdge("C","D", 2);
g.addEdge("C","F", 4);
g.addEdge("D","E", 3);
g.addEdge("D","F", 1);
g.addEdge("E","F", 1);


console.log(g)

console.log(g.shortestPath('A', 'D'))