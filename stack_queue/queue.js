class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor () {
    this.first = null
    this.last = null
    this.size = 0
  }

  // 2 ways
  // 1. add in the beginner and remove from the end (removing from end is On)
  // 2. add in the end and remove from the beginning


  // pseudocode
  // create new node with the given
  // if queue is empty set first and last as new node
  // else 
  //   set last node.next = new node
  //   update last property as new node
  // increase size and return
  enqueue (val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }

  // pseudocode
  // if empty queue return null
  // create temp variable to store first property
  // if only one record (first equal to last) set both to null
  // set first as first.next
  // decrease size
  // return temp.value
  dequeue () {
    if (!this.first) return null
    const temp = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
  }

}

const newQueue = new Queue()

// test enqueue
console.log(newQueue.enqueue('FIRST'))
console.log(newQueue.enqueue('SECOND'))
console.log(newQueue.enqueue('LAST'))

console.log(newQueue)

// test dequeue
console.log(newQueue.dequeue())
console.log(newQueue.dequeue())
console.log(newQueue.dequeue())
console.log(newQueue.dequeue())
console.log(newQueue.dequeue())