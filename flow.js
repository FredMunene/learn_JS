function flow(funcs) {

    // function accepts array of functions
    return function(...args) {
        // apply the first function with all arguments
        // accepts a variable number of arguments.
        // ...args is a rest parameter,
        // function accepts any number of arguments as an array
        let result = funcs[0](...args);
        //pass arguments to first function

        for (let i = 1; i < funcs.length; i++){
            // loop through rest of funcs 
            // result is passed though it
            result = funcs[i](result);
        }

        return result;
    };
}






const square = (nbr) => nbr * nbr
const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2

const flowedFunctions = flow([add2Numbers, square])
console.log(flowedFunctions(2, 3)) // -> 25
