function ceil (num){

let intPart =  floor(num) + 1
return intPart < num ? intPart +1: intPart;
 
}

function floor (num){
    let intPart = 0;

    if (num < 0) {
        while(intPart > num){
            intPart--;
        }
    } else{
        while(intPart <= num){
            intPart++;
        }
        intPart--;
    }
    return intPart;
}

function trunc (num){
    return num < 0 ? -floor(-num) : floor(num);

}

function round (n){
    let intPart = n < 0 ? -floor(-n) : floor(n);
    
    let decimalPart = n - intPart;
    if (n >= 0) {
        return decimalPart >= 0.5 ? intPart + 1 : intPart;
    } else {
        return decimalPart <= -0.5 ? intPart - 1 : intPart;
    }
}



// console.log(floor(3.7))
// console.log(floor(-3.7))
// console.log(floor(3.1))
// console.log(floor(-3.1))

console.log(ceil(4))
console.log(ceil(-3))
console.log(ceil(3))
console.log(ceil(-2))
console.log(ceil(0))

// console.log(trunc(3.7))
// console.log(trunc(-3.7))
// console.log(trunc(3.1))
// console.log(trunc(-3.1))

// console.log(round(3.7))
// console.log(round(-3.7))
// console.log(round(3.1))
// console.log(round(-3.1))
