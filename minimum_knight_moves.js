/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var minKnightMoves = function (x, y) {
  class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
  }

  class Queue {
    constructor() {
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
    enqueue(val) {
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
    dequeue() {
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

  const offsets = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]

  const q = new Queue()
  q.enqueue([0, 0])

  function bfs(x, y) {
    let absX = Math.abs(x)
    let absY = Math.abs(y)
    const visited = ['0_0']
    let steps = 0

    while (q.size) {
      const current_level_count = q.size
      for (let i = 0; i < current_level_count; i++) {
        let current = q.dequeue()
        // console.log(current)
        let current_x = current[0]
        let current_y = current[1]
        if (current_x == absX && current_y == absY) {
          return steps
        }

        for (let j = 0; j < offsets.length; j++) {
          let next_x = current_x + offsets[j][0]
          let next_y = current_y + offsets[j][1]
          if (next_x < 0 || next_y < -1) continue;
          if (!visited.includes(next_x + '_' + next_y)) {
            visited.push(next_x + '_' + next_y)
            q.enqueue([next_x, next_y])
          }
        }
      }
      steps += 1
    }
  }

  return bfs(x, y)
};

console.log(minKnightMoves(270, -21))