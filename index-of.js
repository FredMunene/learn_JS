const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

function indexOf (array, value,val2)  {
    for (const key in array) {
        if (val2 ===  undefined) {
            if ( array[key] === value) {
                return parseInt(key)  
            }
        } else{
                if ( key >= val2 && array[key] === value) {
                    return parseInt(key)  
                }

        }
       
    }
    return -1

}
console.log(indexOf(["t", 0, 0,"t"], "t", 1))

function lastIndexOf (array,value){
    let indexes = [];
    for (const key in array) {
        if (array[key] === value) {
            indexes.push(parseInt(key))            
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

