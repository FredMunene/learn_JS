function cutFirst(str){
    if (str.length > 2){
        return str.slice(2)
    } 
    return ''
    
}

function cutLast(str){
    if (str.length > 2){
    return str.slice(0,str.length-2)
    } 

    return ''
}
function cutFirstLast(str){
    if (str.length > 2){
    return str.slice(2,str.length-2)
    }
    return ''
}

function keepFirst(str){
    // if (str.length > 2){
    return str.slice(0,2)
    // }

    // return ''
}

function keepLast(str){
    // if (str.length > 2){
    return str.slice(str.length-2)
    // }

    // return ''
}

function keepFirstLast(str){
    if (str.length > 2){
    return keepFirst(str) + keepLast(str)
    }

    return ''
}
// console.log(cutFirst("abhgcd"))
// console.log(cutLast("abghcd"))
// console.log(cutFirstLast("abhjcd"))
// console.log(keepFirst("a"))
// console.log(keepLast("cd"))
// // console.log(keepFirstLast("abfsscd"))