function ceil (num){

return floor(num) + 1
 
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
    if (num < 0) {
        return floor(num) + 1
    } else {
        return floor(num)
    }

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

// console.log(ceil(3.7))
// console.log(ceil(-3.7))
// console.log(ceil(3.1))
// console.log(ceil(-3.1))

// console.log(trunc(3.7))
// console.log(trunc(-3.7))
// console.log(trunc(3.1))
// console.log(trunc(-3.1))

// console.log(round(3.7))
// console.log(round(-3.7))
// console.log(round(3.1))
// console.log(round(-3.1))
