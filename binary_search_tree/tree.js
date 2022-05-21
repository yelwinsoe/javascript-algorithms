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
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(7)
tree.insert(16)

console.log(tree)

console.log(tree.find(16))
console.log(tree)
