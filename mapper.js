function map (array,func){
    const result = [];
    for (let index = 0; index < array.length;index++){
        result.push(func(array[index],index,array))
    }
    return result
}
// Array.prototype.flatMap = undefined
// const numbers = [1, 2, 3, 4, 5];
// const doubled = map(numbers, (num) => num * 2);
// console.log(doubled); // Outputs: [2, 4, 6, 8, 10]

// const arr1 = [1, 2, 1];
// const func = (num) => num === 2 ? [2,2] : 1;

// const result = flatMap(arr1,);
// console.log(result);

// accepts parameters array and function
function flatMap(arr, fn) {
    // .reduce : iterates through the array
    // acc : starts as an empty array to accumulate values
    // curr : the current elemnt of the array
    // index , arr -> index, array
    // [] : start with an empty array 
    return arr.reduce((acc, curr,index,arr) => 
    // acc.concat : result of fn() is added to acc
    acc.concat(fn(curr,index,arr)), []);
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4];
  const result = flatMap(numbers, num => num === 2 ? [2,2] : [num]);
  console.log(result); // Output: [1, 2, 2, 4, 3, 6, 4, 8]
  