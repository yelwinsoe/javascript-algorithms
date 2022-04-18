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

  // push - adding a new item to the end of the list
  // Pseudocode
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

  // pop - remove an item from the end of the list
  // Pseudocode
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

  // shift - remove an item from the beginning of the list
  // Pseudocode
  // if empty dll, return undefined
  // create new variable (prevHead) to store current head
  // if length is 1 then update head and tail to null
  // else set head to current head.next
  // set head.prev to null
  // reduce length
  // remove next and prev from prevHead
  // return prevHead
  shift () {
    if (!this.head) return undefined
    let prevHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = prevHead.next
      this.head.prev = null
    }
    this.length--
    prevHead.next = null
    prevHead.prev = null
    return prevHead
  }
  

  // unshift - adding a new node at the beginning of the list
  // Pseudocode
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


  // get - get an item by index from the list
  // set - update an item by the index
  // insert - insert an item to the specific index
  // remove - remove an item by the index
  // reverse - reverse the list
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
console.log(dll.shift())
console.log(dll)
console.log(dll.shift())
console.log(dll)
console.log(dll.shift())
console.log(dll)

// Unshift test
// dll.unshift(4)
// console.log(dll)

// // Test pop
// dll.pop()
// console.log(dll)
// dll.pop()
// console.log(dll)
// dll.pop()
// console.log(dll)