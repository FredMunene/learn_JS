// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
// }

// get takes a key and returns the corresponding value from 'sorceObject '
const get = (obj) =>  sourceObject[obj]

// set takes a key and value, it updates the value of the property an dreturns the value.
const set = (key, value) => {
    sourceObject[key] = value
    return sourceObject[key]
}

// console.log(get("num"))
// console.log(set("num",55))