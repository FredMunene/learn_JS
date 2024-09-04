function slice (array,index = 0, fromIndex = array.length){
    if (fromIndex < 0)  {
        fromIndex+=array.length
    }
    if (index < 0){
        index +=array.length
    }

    let res = Array.isArray(array) ? [] : '';
    for (let i = 0; i < array.length;i++){
        if ( i >= index && i < fromIndex )  {
            if (Array.isArray(array)){
                res.push(array[i])
            } else{
                res+= array[i];
            }
           
        }
       
    }
    return res
}
console.log(slice('abcdef', 2) )
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(slice(animals,2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(slice(animals,2, 4)); /////
// // Expected output: Array ["camel", "duck"]

// console.log(slice(animals,1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(slice(animals,-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(slice(animals,2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(slice(animals));
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]