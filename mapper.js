function map (array,func){
    const result = [];
    for (let index = 0; index < array.length;index++){
        result.push(func(array[index],index,array))
    }
    return result
}

// const numbers = [1, 2, 3, 4, 5];

// const doubled = map(numbers, (num) => num * 2);
// console.log(doubled); // Outputs: [2, 4, 6, 8, 10]
