const first = (array) => array[0]

const last = (string) => string[string.length - 1]

const kiss = (array) => {
    const str = [first(array),last(array)]
    return str
}


// console.log(last("alot"))
// console.log(first([8,7,6]))
// console.log(kiss([8,7,6]))