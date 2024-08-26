const escapeStr = "`\\/\"\'"


const arr = [4,'2']

Object.freeze(arr)
const obj = {
    str:"string",
    num:123,
    bool:true,
    undef:undefined
}
// Object.freeze() makes existing properties non-writable and non-configurable.
Object.freeze(obj)
// console.log(escapeStr)
// console.log(obj)

const nested = {
    arr : [4, undefined,'2'],
    obj : {
        str:"string",
        num: 234,
        bool: false
    }
}

Object.freeze(obj)

// console.log(nested)