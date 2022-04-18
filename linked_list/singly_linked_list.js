// Linked list node
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // Adding a value to the end of linked list
  push (val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  // Removing a value from the end of linked list
  pop () {
    if (!this.head) return undefined
    let current = this.head
    let prev = current
    while(current.next) {
      prev = current
      current = current.next
    }
    this.tail = prev
    this.tail.next = null
    this.length--
    if (this.length == 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  // Remooving a new node from the beginning of the linked list
  shift () {
    if (!this.head) return undefined
    let currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead
  }

  // Adding a new node to the beginning of the linked list
  unshift (val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  // Retrieving a node by it's position in the linked list
  get (index) {
    if (index < 0 || index >= this.length || !this.head) return null
    let current = this.head
    let counter = 0
    while (counter < index) {
      current = current.next
      counter++
    }
    return current
  }

  // Changing the value of a node based on it's position in the linked list
  set (index, val) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }

  // Adding a node to the linked list at a specific position
  insert (index, val) {
    if (index < 0 || index > this.length || !this.head) return false
    if (index === this.length) return !!this.push(val)
    if (index === 0) return !!this.unshift(val)
    let newNode = new Node(val)
    let prev = this.get(index-1)
    let temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return true
  }

  // Removing a node from linked list at a specific position
  remove (index) {
    if (index < 0 || index > this.length || !this.head) return false
    if (index === this.length-1) return this.pop()
    if (index === 0) return this.shift()
    let prev = this.get(index-1)
    let removed = prev.next
    prev.next = removed.next
    this.length--
    return removed
  }

  // Reversing the linked list in place
  reverse () {
    let node = this.head
    this.head = this.tail
    this.tail = node

    let next
    let prev = null

    for (let i=0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }

}

let ll = new SinglyLinkedList()
console.log(ll)

// push test
ll.push('hi')
console.log(ll)
ll.push('there')
console.log(ll)
ll.push('hello')
console.log(ll)

// get test
// console.log(ll.get(100))

// set test
// console.log(ll.set(1, 'sup'))
// console.log(ll)

// insert test
// console.log(ll.insert(100, 'okie'))
// console.log(ll.get(0))

// // insert test
// console.log(ll.remove(2))
// console.log(ll)

// reverse test
console.log(ll.reverse())

// // shift test
// console.log(ll.shift())
// // console.log(ll.shift())
// // console.log(ll.shift())
// console.log(ll)

// // unshift test
// ll.unshift('wassup')
// console.log(ll)
