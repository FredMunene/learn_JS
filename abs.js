// Ternary functions
const isPositive = (number) => {
   return  (number > 0 ? true : false) 
}

const abs = (number) => { 
   return ( number > 0 ? number : number*-1)
}

console.log(isPositive(0))
console.log(abs(-0))