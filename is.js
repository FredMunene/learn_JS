// is object
// const is = {}


is.num = (num) => (typeof num) === 'number' ? true : false,
is.nan = (num) => (typeof num) === 'Nam' ? true : false,
is.str =(num) => (typeof num) === 'string' ? true : false,
is.bool = (num) => (typeof num) === 'boolean' ? true : false,
is.undef = (num) => (typeof num) === 'undefined' ? true : false,
is.def = (num) => (typeof num) === 'defined' ? true : false,
is.arr = (num) => (typeof num) === 'array' ? true : false,
is.obj  = (num) => (typeof num) === 'object' ? true : false,
is.fun = (num) => (typeof num) === 'fucntion' ? true : false,
is.truthy = (num) => (typeof num) === 'truthy' ? true : false,
is.falsy  = (num) => (typeof num) === 'falsy' ? true : false,


console.log(is.str(8))


