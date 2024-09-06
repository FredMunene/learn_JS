function fold(array,func,acc = 0){
    for (let index = 0; index < array.length;index++){
        acc = func(acc,array[index])
    }
    return acc;
}

function foldRight(array,func,acc){
    for (let index = array.length-1; index >= 0;index--){
        acc = func(acc,array[index])
    }
    return acc;

}

function reduce(array,func){
    /// throw error if array is less than 1
    if (array.length < 1 || !Array.isArray(array)){
        throw new Error('length of array less than 1');
    }
    // set accumulator to first element of array
    let acc = array[0];

    for (let index = 1; index < array.length;index++){
        acc = func(acc,array[index],index,array)
    }
    return acc
}

function reduceRight(array,func){
     /// throw error if array is less than 1
     if (array.length < 1 || !Array.isArray(array)){
        throw new Error('length of array less than 1');
    }
    // set accumulator to first element of array
    let acc = array[array.length-1];

    for (let index = array.length-2; index >= 0;index--){
        acc = func(acc,array[index],index,array)
    }
    return acc

}

const adder = (a, b) => a + b
console.log(fold([1, 2, 3], adder, 2)) // returns 8 (2 + 1 + 2 + 3)
console.log(foldRight([1, 2, 3], adder, 2)) // returns 8 (2 + 3 + 2 + 1)
console.log(reduce([1, 2, 3], adder) )// returns 6 (1 + 2 + 3)
console.log(reduceRight([1, 2, 3], adder)) // returns 6 (3 + 2 + 1)
