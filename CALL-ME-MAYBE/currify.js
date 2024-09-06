function currify(func){
    return function curried(...args){// rest parameter to collect arguments
        // if the number of arguments provided is suffient to call with original function
        if (args.length >= func.length){
            // calls original function with all arguments
            return func(...args);
        } else {
            return function(...nextArgs){
                // call recursiveely the currify function
                return curried(...args, ...nextArgs);
            };
        }
    };
}

// const mult2 = (el1, el2) => el1 * el2
// console.log(mult2(2, 2)) // result expected 4

// const mult2Curried = currify(mult2)

// console.log(mult2Curried(2)(2)) // result expected 4
// // (same result, with a function that has technically only one argument)
