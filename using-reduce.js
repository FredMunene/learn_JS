// reduce
const adder = (array,num = 0) => array.reduce(
    (total, number) => total + number,
    num   
)
const array1 = [1, 2, 3, 4];
console.log(adder([1, 2, 3, 4],10));

const sumOrMul = (array,num = 0) => array.reduce(
    (total, number) => number % 2 === 0 ? total*number : total+number,
    num    
)

// console.log(sumOrMul(array1,5));

const funcExec = (functions, num = 0) => functions.reduce(
    (result, func) => func(result),num
) 