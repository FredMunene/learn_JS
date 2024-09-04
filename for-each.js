function forEach(array,func) {
    for (var index = 0; index < array.length;index++){
        func(array[index],index,array);
    }
}

const numbers = [1, 2, 3, 4, 5];

forEach(numbers,console.log)