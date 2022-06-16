// max heaps
// max 2 child
// childs are always smaller than parent
// child value isn't sorted

// left child formula for array 2n+1
// right child formula for array 2n+2
// parent formula (n-1)/2


class maxHeaps {
  constructor () {
    this.values = []
  }

  // Inserting value
  // Psuedocode
  // Push the value into array
  // While the value is greater than parent using formul (n-1)/2
  //   Swap the vlaue
  // return the array
  insert (val) {
    this.values.push(val)
    let idx = this.values.length - 1
    let parentIdx = Math.floor((idx - 1) / 2)
    while (this.values[idx] > this.values[parentIdx] & idx > 0) {
      [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]]
      idx = parentIdx
      parentIdx = Math.floor((idx - 1)/2)
    }
    return this.values
  }

  // extracting max value
  extractMax () {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }

  // Sink down the tree after putting the ending number in the first place
  sinkDown () {
    let index = 0

    // Loop through to sink down the index 0
    while (true) {

      // Determine to swap left or right child

      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let swap = null

      if (leftChildIndex < this.values.length) {
        if (this.values[leftChildIndex] > this.values[index]) {
          swap = leftChildIndex
        }
      }

      // If right is greater than left then swap right
      if (rightChildIndex < this.values.length) {
        if ((this.values[rightChildIndex] > this.values[index] & swap == null) || (swap !== null & (this.values[rightChildIndex] > this.values[leftChildIndex]))) {
          swap = rightChildIndex
        }
      }

      if (swap === null) break // If there's nothing left to swap
      [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]]

      // Change the base to newly swap index
      index = swap
      swap = null
    }
  }

}

const mh = new maxHeaps()
mh.insert(1)
mh.insert(5)
mh.insert(7)
mh.insert(3)
mh.insert(10)
mh.insert(20)

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