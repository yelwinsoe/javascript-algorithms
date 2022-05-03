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
  // Pseudocode
  // if empty dll, return undefined
  // if only one record, return head
  // else create a temporary variable to count index
  // create a temporary node variable
  // if index less than half length start the loop from head else start from  tail until the correct index is arrive
  // return the node
  get(index) {
    if (!this.head) return null
    if (index < 0 || index >= this.length) return null
    else {
      let currentNode
      if (index < this.length/2) {
        let counter = 0
        currentNode = this.head
        while (counter < index) {
          currentNode = currentNode.next
          counter++
        }
      } else {
        let counter = this.length - 1
        currentNode = this.tail
        while(counter > index) {
          currentNode = currentNode.prev
          counter--
        }
      }
      return currentNode
    }
  }


  // set - update an item by the index
  // Pseudocode
  // create a variable which is the result of get method using the index
  // if the get method return valid Node, set the value of the node passed to the function
  // return true
  set(index, val) {
    let tempNode = this.get(index)
    if (tempNode) {
      tempNode.val = val
      return true
    }
    return false
  }

  // insert - insert an item to the specific index
  // Pseudocode
  // return false if index is less than zero or greater than or equal to the length
  // if the index is 0 then use unshift
  // if the index is the same as the length, use push
  // use the get method to access the index -1
  // set the next and prev properties on the correct nodes to link everything together
  // increament the length and return true
  insert(index, val) {
    if (index < 0 || index >= this.length) return false
    if (index == 0) return !!this.unshift(val)
    if (index == this.length) return !!this.push(val)

    let newNode = new Node(val)
    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next

    beforeNode.next = newNode
    newNode.prev = beforeNode
    newNode.next = afterNode
    afterNode.prev = newNode
    
    this.length++
    return true
  }

  // remove - remove an item by the index
  // Pseudocode
  // return false if index is less than zero or greater than or equal to the length
  // if the index 0 then use shift
  // if the inde is same as the length - 1, use pop
  // use the get method to get the item to be removed
  // update the next and prev properties to remove the found node
  // set next and prev null on the found node
  // drecrease the length and return found node
  remove(index) {
    if (index < 0 || index >= this.length) return false
    if (index == 0) return this.shift()
    if (index == this.length) return this.pop()
    
    let foundNode = this.get(index)
    let beforeNode = foundNode.prev
    let afterNode = foundNode.next
    beforeNode.next = afterNode
    afterNode.prev = beforeNode
    foundNode.next = null
    foundNode.prev = null
    this.length--
    return foundNode
  }


  // reverse - reverse the list
  // Pseudocode
  // set head as tail and tail as head
  // loop through from head using prev
  // update next and prev correctly
  reverse() {
    if (this.length <= 1) return this
    
    this.tail = this.head
    let current = this.head
    while (current) {
      let true_next = current.next
      current.next = current.prev
      current.prev = true_next

      this.head = current
      current = true_next
    }
    return this
  }
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

// Reverse test
console.log(dll.reverse())
console.log(dll)

// // Remove test
// console.log(dll.remove(1))
// console.log(dll)

// // Insert test
// dll.insert(1, 4)
// console.log(dll)

// // Set test
// console.log(dll.set(0, 4))
// console.log(dll)

// Get test
// console.log(dll.get(0))

// Shift test
// console.log(dll.shift())
// console.log(dll)
// console.log(dll.shift())
// console.log(dll)
// console.log(dll.shift())
// console.log(dll)

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