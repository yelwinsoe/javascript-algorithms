// Super basic
function hash(key, arrayLen) {
  let total = 0
  for (let char of key) {
    let value = char.charCodeAt(0) - 96
    total += (total + value) % arrayLen
  }
  return total
}

function hashImproved(key, arrayLen) {
  let total = 0
  let WEIRD_PRIME = 31
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96
    total += (total * WEIRD_PRIME + value) % arrayLen
  }
  return total
}

// console.log(hashImproved('hello', 10))


// Better hash function

class HashTable {
  constructor (size = 53) {
    this.keyMap = new Array(size)
  }

  _hash (key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  set (key, value) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }

  get (key) {
    let index = this._hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
  }

  values () {
    let valuesArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr
  }

  keys () {
    let keysArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr
  }
}

const ht = new HashTable()
ht.set('hello world', 'good bye!')
ht.set('digs', 'are cool')
ht.set('cats', 'are fine')
ht.set('i love', 'pizza')
ht.set('i like', 'pizza')

console.log(ht)
console.log(ht.get('i love'))


console.log(ht.values())
console.log(ht.keys())