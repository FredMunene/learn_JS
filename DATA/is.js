// is object
const is = {}


is.num = (num) => (typeof num) === 'number' ? true : false;
is.nan = (num) => num !== num ? true : false;
is.str =(num) => (typeof num) === 'string' ? true : false;
is.bool = (num) => (typeof num) === 'boolean' ? true : false;
is.undef = (num) => (typeof num) === 'undefined' ? true : false;
is.def = (num) => (typeof num) !== 'undefined' ? true : false;
is.arr = (num) => Array.isArray(num);
// object includes plain objects and objects with null prototypes. Arrays are excluded
is.obj  = (num) => num !== null && typeof num === 'object' && !Array.isArray(num);
is.fun = (num) => (typeof num) === 'function' ? true : false;
is.truthy = (num) => !!num;
is.falsy  = (num) => !num ;


// console.log(is.fun([console.log))
// console.log(is.nan(NaN))


