const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

function indexOf (array, value)  {
    for (const key in array) {
        if (array[key] === value) {
            return parseInt(key)  
        }
    }
    return -1

}
// console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))

function lastIndexOf (array,value){
    let indexes = [];
    for (const key in array) {
        if (array[key] === value) {
            indexes.push(key)            
        }
    }
    return indexes[indexes.length-1]
}
// console.log(lastIndexOf(beasts,"bison"))

function includes (array,value){
    for (const key in array) {
        if (array[key] === value) {
            return true           
        }
    }
    return false
}

