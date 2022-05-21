// Breadth first search
// Going through the tree level by level


// Tree for creating tree
// Binary Search Trees

class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  // pseudocode
  // create a new node
  // starting from the root
  // set root as new node if there's no root
  // else check if the value is greater than or less than the root
  //   if greater
  //     check if there's a node to the right
  //       if there is, move to that node and repeat the steps
  //       if there's no more node, add new node as the right property
  //   if it's less
  //     check if there's a node to the left
  //       if there is move to that node and repeat the steps
  //       if there's no more node, add node as left property
  insert (val) {
    let newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        if (val === current.value) return undefined
        if (val < current.value) {
          if (current.left === null) {
            // left side
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else if (val > current.value) {
          // right side
          if (current.right === null) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        }
      }
    }
  }

  // pseudocode
  // if root is null then return undefined
  // else starting from root
  // if the root value is the same as the search value then we are done
  // else check if the current node is less than or greater than the search value
  // if greater
  //   check if there's a node to the right
  //     if there is move to the node and repeat the steps
  //     else we are done
  // if less than
  //   check if there's a node to the left
  //     if there is move to the node and repeat the steps
  //     else we are done
  find (val) {
    if (!this.root) return false
    let current = this.root
    let found = false
    while (current && !found) {
      if (val < current.value) {
        // left side
        current = current.left
      } else if (val > current.value) {
        // right side
        current = current.right
      } else {
        found = true
      }
    }

    return current
  }


  // Pseudocode
  // create a queue to store the value of the node visited
  // place the root node in the queue
  // create a variable to stroe all visited node
  // loop as long as there is anything in the queue
  //   dequeue a node from the queue and push the value of the node into the variable to store the node
  //   if there is a left property on the node current dequeue node, add it to the queue
  //   if there is a right property on the node current dequeue node, add it to the queue
  // return the variable that store all visited node
  bfs () {
    const queue = [this.root]
    const visited = []
    while (queue.length > 0) {
      const currentDequeue = queue.shift()
      visited.push(currentDequeue.value)
      if (currentDequeue.left) {
        queue.push(currentDequeue.left)
      }
      if (currentDequeue.right) {
        queue.push(currentDequeue.right)
      }
    }
    return visited
  }

  // Pseudocode
  // create a variable to store the values of node visited
  // store the root of the tree in a variable, current
  // write a helper function - treverse
  //   push the value of the node to the variable that stores the values
  //   if the node has a left property, call the helper function with the left property on the node
  //   if the node has a right property, call the helper function with the left property on the node
  // invoke the helper function with current variable
  // return the array of values
  dfsPreOrder () {
    const data = []
    let current = this.root
    function traverse(node) {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
  
  
  // Pseudocode
  // create a variable to store the values of node visited
  // store the root of the tree in a variable, current
  // write a helper function - treverse
  //   if the node has a left property, call the helper function with the left property on the node
  //   if the node has a right property, call the helper function with the left property on the node
  //   push the value of the node to the variable that stores the values
  // invoke the helper function with current variable
  // return the array of values
  dfsPostOrder () {
    const data = []
    let current = this.root
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(this.root)
    return data
  }

  // Pseudocode
  // Pseudocode
  // create a variable to store the values of node visited
  // store the root of the tree in a variable, current
  // write a helper function - treverse
  //   if the node has a left property, call the helper function with the left property on the node
  //   push the value of the node to the variable that stores the values
  //   if the node has a right property, call the helper function with the left property on the node
  // invoke the helper function with current variable
  // return the array of values
  dfsInOrder () {
    const data = []
    let current = this.root
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }

}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(7)
tree.insert(16)
tree.insert(3)

console.log(tree)


//       10
//    5     13
//  3  7  11 16


// Test BFS
console.log('BFS _____')
console.log(tree.bfs())


// Test DFS Pre Order
console.log('DFS Pre Order _____')
console.log(tree.dfsPreOrder())


// Test DFS Post Order
console.log('DFS Post Order _____')
console.log(tree.dfsPostOrder())

// Test DFS In Order
console.log('DFS In Order _____')
console.log(tree.dfsInOrder())