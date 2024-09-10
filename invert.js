const invert = (obj) => {
    const newObj = {}
    const keys = Object.keys(obj)

    for (let key of keys){
        newObj[obj[key]] = key
    }
    return newObj
} 


const person = {
    // 'age' : 43,
    // 'name' : 'fred'
}

console.log(invert(person))