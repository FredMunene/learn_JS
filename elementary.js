const multiply = (a,b) => {

    //negative multiplication
    if (b < 0) return -multiply(a,-b);

    // var res = 0
    if (b === 0) return 0;

    return a + multiply(a,b-1);
}

console.log(multiply(-123,22))

const divide = (a,b) => {
    let count = 0

    const isNegative = (a < 0) !== (b < 0);

    a = Math.abs(a);
    b = Math.abs(b);

    while (a >= b){
        a -=b
        count++
    }

    return isNegative ? -count : count
}

console.log(divide(-123,-22))

const modulo = (a,b) => {

    const isNegative = (a < 0)

    b = Math.abs(b)
    a = Math.abs(a)
    
    let rem = a - multiply(divide(a,b),b);

    if (a < 0 && rem !== 0){
        rem = b + rem;
    } 
    return isNegative ? -rem : rem;
}
console.log(modulo(-123,-22))