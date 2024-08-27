let small = -Infinity

let biggie = Infinity
// console.log(biggie === 1.976931348623157e308)
// console.log(typeof(small))
// console.log(small)

console.log(Number.MAX_VALUE > Number.MAX_SAFE_INTEGER ) // true
console.log(Infinity > Number.MAX_VALUE) // true

console.log(Number.MIN_SAFE_INTEGER < Number.MIN_VALUE) // true
console.log(-Infinity < Number.MIN_SAFE_INTEGER) // true