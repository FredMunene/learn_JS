// parameters: array to iterate and callback function that will be applied to each element of array
function forEach(array,func) {
    for (var index = 0; index < array.length;index++){
        // function receives three arguments, the current element, the index, and entire array
        func(array[index],index,array);
    }
}

const numbers = [1, 2, 3, 4, 5];

forEach(numbers,console.log)