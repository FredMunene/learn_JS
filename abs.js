// Ternary functions
const isPositive = (number) => {(number > 0 ? true : false) }

const abs = (number) => { 
   return (isPositive(number)) ? number : number*-1
}

// console.log(isPositive(0))
// console.log(abs(-0))