function cutFirst(str){
    return str.slice(2)
}

function cutLast(str){
    return str.slice(0,str.length-2)
}
function cutFirstLast(str){
    return str.slice(2,str.length-2)
}

function keepFirst(str){
    return str.slice(0,2)
}

function keepLast(str){
    return str.slice(str.length-2)
}

function keepFirstLast(str){
    return keepFirst(str) + keepLast(str)
}
// console.log(cutFirst("abhgcd"))
// console.log(cutLast("abghcd"))
// console.log(cutFirstLast("abhjcd"))
// console.log(keepFirst("abggcd"))
// console.log(keepLast("abcgfd"))
// console.log(keepFirstLast("abfsscd"))