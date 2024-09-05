function map (array,func){
    const result = [];
    for (let index = 0; index < array.length;index++){
        result.push(func(array[index],index,array))
    }
    return result
}
Array.prototype.flatMap = undefined

// const numbers = [1, 2, 3, 4, 5];

// const doubled = map(numbers, (num) => num * 2);
// console.log(doubled); // Outputs: [2, 4, 6, 8, 10]

// function flatMap(arr,func){
//     return arr.reduce((acc, curr) => acc.concat(func(curr)), []);
// }

// const arr1 = [1, 2, 1];

// const func = (num) => num === 2 ? [2,2] : 1;

// const result = flatMap(arr1,);

// console.log(result);

function flatMap(arr, fn) {
    return arr.reduce((acc, curr) => acc.concat(fn(curr)), []);
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4];
  const result = flatMap(numbers, num => num === 2 ? [2,2] : [num]);
  console.log(result); // Output: [1, 2, 2, 4, 3, 6, 4, 8]
  