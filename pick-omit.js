function pick(obj,array) {
    const newObj  = {}

    if (typeof array === 'string'){
      array = array.split();
    }

    keys = Object.keys(obj)
    
    for (let value of array){
        if (keys.includes(value)){
            newObj[value] = obj[value]
        }

    }
    return newObj
    //return an object whose keys are present in the string or array
}

function omit(obj,array){
    // return an object whose key are not in the string
    const newObj  = {}

    if (typeof array === 'string'){
        array = array.split()
    }

    const keys  = Object.keys(obj)

    for (let key of keys){
        if (!array.includes(key) && obj[key]) {
            newObj[key] = obj[key]
        }
    }

    return newObj
}

// console.log(pick({'ape': 'legend','milk' : 34},['ape','legend','milk']))
// console.log(pick({'ape': 'legend','ageVerified' : false},['ape','ageVerified']))