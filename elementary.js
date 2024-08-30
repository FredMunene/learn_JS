const multiply = (a,b) => {

    //negative multiplication
    if (b < 0) return -multiply(a,-b);

    // var res = 0
    if (b === 0) return 0;

    return a + multiply(a,b-1);
}

console.log(multiply(123,-22))

const divide = (a,b) => {
    let count = 0

    while (a >= b){
        a-=b
        count++
    }

    return count
}

console.log(divide(6,3))

const modulo = (a,b) => {

    b = Math.abs(b)
    
    let rem = a - multiply(divide(a,b),b);

    if (a < 0 && rem !== 0){
        rem = b + rem;
    } 
    return b < 0 ? -rem : rem;
}
console.log(modulo(123,-22))