const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

function indexOf (array, value,val2)  {
    for (const key in array) {
        if (val2 ===  undefined) {
            if ( array[key] === value) {
                return parseInt(key)  
            }
        } else{
            if ( key > val2 && array[key] === value) {
                return parseInt(key)  
            }

        }
       
    }
    return -1

}
console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))

function lastIndexOf (array,value, value2){
    let indexes = [];
    for (const key in array) {
        if (value2 === undefined) {
            if (array[key] === value) {
                indexes.push(parseInt(key))            
            }
        } else {
            
            if (array.slice(value2+1)[key] === value) {
                indexes.push(parseInt(key))            
            }
        }
       
    }
    return indexes[indexes.length-1]
}
console.log(lastIndexOf(["t", 0, 0, "t"],"t", 2))

function includes (array,value){
    for (const key in array) {
        if (array[key] === value) {
            return true           
        }
    }
    return false
}

