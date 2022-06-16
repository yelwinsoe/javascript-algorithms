class Node {
  constructor (val, priority) {
      this.val = val
      this.priority = priority
  }
}

class PriorityQueue {
  constructor () {
      this.values = []
  }

  insert (val, priority) {
      const node = new Node(val, priority)
      this.values.push(node)
      let idx = this.values.length - 1
      let parentIdx = Math.floor((idx - 1) / 2)
      while (this.values[idx]?.priority > this.values[parentIdx]?.priority & idx > 0) {
          [this.values[idx], this.values[parentIdx]] =[this.values[parentIdx], this.values[idx]]
          idx = parentIdx
          parentIdx = Math.floor((idx - 1) / 2)
      }
      return this.values
  }

  extractMax () {
      let max = this.values[0]
      let last = this.values.pop()
      if (this.values.length > 0) {
          this.values[0] = last
          this.sinkDown()
      }
      return max
  }

  sinkDown () {
      let swap = null
      let idx = 0
      while (true) {
          const leftChildIdx = idx * 2 + 1
          const rightChildIdx = idx * 2 + 2

          if (this.values[leftChildIdx]?.priority > this.values[idx]?.priority) {
              swap = leftChildIdx
          }

          if ((this.values[rightChildIdx]?.priority > this.values[idx]?.priority & swap === null) || (
              this.values[rightChildIdx]?.priority > this.values[leftChildIdx]?.priority & swap !== null
          )) {
              swap = rightChildIdx
          }

          if (swap === null) break

          [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]]
          idx = swap
          swap = null
      }
  }
}



const mh = new PriorityQueue()
mh.insert('A', 1)
mh.insert('B', 5)
mh.insert('C', 7)
mh.insert('D', 3)
mh.insert('E', 10)
mh.insert('F', 20)

console.log(mh)
console.log(mh.extractMax())
console.log(mh)
console.log(mh.extractMax())
console.log(mh)
console.log(mh.extractMax())
console.log(mh)
console.log(mh.extractMax())
console.log(mh)
console.log(mh.extractMax())
console.log(mh)
console.log(mh.extractMax())
console.log(mh)