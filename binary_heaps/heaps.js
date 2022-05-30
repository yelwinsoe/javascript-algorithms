// Max binary heap definition
// - Each parent has at most two child nodes
// - The value of each parent node is always greater than it's child nodes
// - In a max Binary Heap, the parent is greater than the children, but there are no gurantees between sibling nodes
// - A binary heap is a as compact as possible. All the children of each node are as full as they can be and left children are filled out first

// Binary heaps are used to implement Priority Queues
// Use in graph traversal algorithms


// Using array to store heaps
// For example = [100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11]
// left child node = 2n + 1
// right child node = 3n + 1
// Parent node = (n-1)/2  (floored)

class MaxBinaryHeap {
  constructor () {
    this.values = []
  }

  // Pseudocode
  // Push the value into the values property on the heap (array push)
  // Bubble up
    // Push value into the array
    // Calculate the current index (inserted value at the end of the array) and it's parent index
    // loop while value in parent index is less than value in the current index
    // swap the two index
    // update current index as the parent index and calculate the new parent index
  insert (val) {
    this.values.push(val)
    let index = this.values.length - 1
    let parentIndex = Math.floor((index - 1) / 2)
    while (this.values[parentIndex] < this.values[index] && index > 0) {
      [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]
      index = parentIndex
      parentIndex = Math.floor((index - 1) / 2)
    }
    return this.values
  }

  // Pseudocode
  // Swap the first value and last value
  // Pop the last value to return
  // create a variable to store current index, starts at 0
  // keep looping
  //   find left child: 2n+1
  //   find right child: 2n+2
  //   if ether left or right is greater than current index value then swap with the larger one
  //   set the current index as the swap-ed index
  //   break if no left or right is larger
  // return the extracted value

  extractMax () {
    // EDGE case

    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }

  sinkDown () {
    let index = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild > element) {
          swap = leftChildIndex
        }
      }
      
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex
        }
      }

      if (swap === null) break
      this.values[index] = this.values[swap]
      this.values[swap] = element
      index = swap
    }
  }

}

const mbh = new MaxBinaryHeap()

// Test insert
mbh.insert(41)
mbh.insert(39)
mbh.insert(33)
mbh.insert(18)
mbh.insert(27)
mbh.insert(12)
// mbh.insert(55)
// mbh.insert(45)

console.log(mbh)

// extract max test
console.log(mbh.extractMax())
console.log(mbh)
console.log(mbh.extractMax())
console.log(mbh)
console.log(mbh.extractMax())
console.log(mbh)
console.log(mbh.extractMax())
console.log(mbh)
console.log(mbh.extractMax())
console.log(mbh)
console.log(mbh.extractMax())
console.log(mbh)
console.log(mbh.extractMax())
console.log(mbh)