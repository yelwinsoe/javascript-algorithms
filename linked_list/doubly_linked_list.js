// Linked list node
class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

// Doubly linked list or DLL
class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // push
  // create a new node to add in
  // if the list is empty new node is both head and tail
  // else set the next property of the tail to be the new node
  // set the previous property of the new node to be the tail
  // set the tail to be newly created node
  // increase the length
  // return the whole dll
  push (val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  // pop
  // if the dll is empty return undefined
  // store a current tail in a temporary variable
  // if the length of dll is 1 then just update head and tail as null
  // else update the tail to be prev property of the current tail
  // set the next property of the new tail to be null
  // decrease the length
  // return the temporary variable / removed item
  pop () {
    if (!this.head) return undefined
    let currentTail = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = currentTail.prev
      this.tail.next = null
      currentTail.prev = null
    }
    this.length--
    return currentTail
  }

  // shift
  

  // unshift - adding a new node as the first item
  // create new node
  // if empty dll, add new node as head and tail
  // else update current head prev property to new node
  // update new node next property to current head
  // return dll
  unshift (val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }


  // get
  // set
  // insert
  // removereverse
}

let dll = new DoublyLinkedList()
console.log(dll)

// Test push
dll.push('1')
// console.log(dll)
dll.push('2')
// console.log(dll)
dll.push('3')
console.log(dll)

// Shift test
dll.unshift(4)
console.log(dll)

// // Test pop
// dll.pop()
// console.log(dll)
// dll.pop()
// console.log(dll)
// dll.pop()
// console.log(dll)