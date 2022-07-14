// const isPowerOfTwo = (x) => {
//   if (x === 0) return false
//   else {
//     while(x % 2 === 0) x /= 2
//     return (x === 1)
//   }
// }

const isPowerOfTwo = (x) => {
  return (x && !(x & (x - 1)))
}

// (10 && !(10 & (9))) // false
// (8 && !(8 & (7))) // true


// 10:2 5:0
// 5:2  2:1
// 2:2  1:0
// 1:2  0:1

// 10=1010


// 9:2 4:1
// 4:2 2:0
// 2:2 1:0
// 1:2 0:1

// 9=1001



// 8:2 4:0
// 4:2 2:0
// 2:2 1:0
// 1:2 0:1

// 8=10000



// Bitwise AND
// (10 & 9) = 1000 = 8 (in number)

console.log(10 & 9)



// console.log(isPowerOfTwo(10)) // false
// console.log(isPowerOfTwo(8)) // true
// console.log(isPowerOfTwo(16)) // true
// console.log(isPowerOfTwo(18)) // false