class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

// Can use array as well push/pop or unshift/shift
class Stack {
  constructor () {
    this.first = null
    this.last = null
    this.size = 0
  }

  // pseudocode
  // the function should accept a value
  // create a new node with the value
  // if there's no nodes in the stack, set the first and last property to be newly created node
  // if there's at least one node, create a variable to store the current first property on the stack
  // reset the first property to be the newly created node
  // set the next property on the node to be previously created node
  // increment the size of the stack by 1
  push (val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return ++this.size
  }

  // pseudocode
  // if the stack is empty return null
  // create a variable to temporary store first (to return)
  // if only one record (first equal to last) then set last to null
  // set first as first.next
  // decrease size
  // return temp.value
  pop () {
    if (!this.first) return null
    let temp = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
  }
}

let newStack = new Stack()

// push test
console.log('push test')
console.log(newStack.push('FIRST'))
console.log(newStack.push('SECOND'))
console.log(newStack.push('LAST'))

console.log(newStack)

console.log('pop test')
console.log(newStack.pop())
console.log(newStack.pop())
console.log(newStack.pop())