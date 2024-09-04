// reduce
const adder = (array) => array.reduce(
    (total, number) => total + number     
)
const array1 = [1, 2, 3, 4];
console.log(adder(array1));

const sumOrMul = (array,num) => array.reduce(
    (total, number) => number % 2 === 0 ? total*number : total+number,
    num    
)

console.log(sumOrMul(array1,5));

const funcExec = (functions) => functions.reduce(
    (result, func) => func(result)
) 