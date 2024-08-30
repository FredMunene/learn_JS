function cutFirst(str){
    if (str.length > 2){
        return str.slice(2)
    } 
    return str
    
}

function cutLast(str){
    if (str.length > 2){
    return str.slice(0,str.length-2)
    } 
    return str
}
function cutFirstLast(str){
    if (str.length > 2){
    return str.slice(2,str.length-2)
    }
    return str
}

function keepFirst(str){
    if (str.length > 2){
    return str.slice(0,2)
    }
    return str
}

function keepLast(str){
    if (str.length > 2){
    return str.slice(str.length-2)
    }
    return str
}

function keepFirstLast(str){
    if (str.length > 2){
    return keepFirst(str) + keepLast(str)
    }
    return str
}
// console.log(cutFirst("abhgcd"))
// console.log(cutLast("abghcd"))
// console.log(cutFirstLast("abhjcd"))
// console.log(keepFirst("abggcd"))
// console.log(keepLast("abcgfd"))
// console.log(keepFirstLast("abfsscd"))