// Ternary functions
const isPositive = (number) => (number >= 0 ? true : false) 

const abs = (number) => (isPositive(number)) ? number : number*-1

console.log(isPositive(1))
console.log(abs(-Infinity))