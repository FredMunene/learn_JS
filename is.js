// is object
const is = {}


is.num = (num) => (typeof num) === 'number' ? true : false;
is.nan = (num) => num !== num ? true : false;
is.str =(num) => (typeof num) === 'string' ? true : false;
is.bool = (num) => (typeof num) === 'boolean' ? true : false;
is.undef = (num) => (typeof num) === 'undefined' ? true : false;
is.def = (num) => (typeof num) === 'defined' ? true : false;
is.arr = (num) => Array.isArray(num);
// object includes plain objects and objects with null prototypes. Arrays are excluded
is.obj  = (num) => num !== null && typeof num === 'object' && !Array.isArray(num);
is.fun = (num) => (typeof num) === 'fucntion' ? true : false;
is.truthy = (num) => (typeof num) === 'truthy' ? true : false;
is.falsy  = (num) => (typeof num) === 'falsy' ? true : false;


console.log(is.obj([{}, { length: 10 }, Object.create(null)]))
// console.log(is.nan(NaN))


