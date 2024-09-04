
function round(num){
    if(num==0){
        return 0
    }

    let number=num-modulo(num,1)
    if (Math.abs(modulo(num,1))>=0.5){
        return  number < 0 ? number-1:number+1;
    }

return number 
}

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

function ceil (num)  {
    if (num === 0) {
        return 0;
    }

    let res = 0;

    if (num > 0xfffffffff) {
        num -= 0xfffffffff;
        res += 0xfffffffff;
    }

    let fracPart = modulo(num,1); 
    let number = num - fracPart; 

    return fracPart > 0 ? res + number + 1 : res + number;
}


function floor(num){
    if(num==0){
        return 0
       }

    let res=num-modulo(num,1)

    return res<0?res-1:res
}


function trunc (num){

    if(num==0){
        return 0
       }
    let res=0;

    if (num > 0xfffffffff) {
        num -= 0xfffffffff;
        res += 0xfffffffff;
    }

    return (num-modulo(num,1))+res
}

const multiply = (a,b) => {

    //negative multiplication
    if (b < 0) return -multiply(a,-b);

    // var res = 0
    if (b === 0) return 0;

    return a + multiply(a,b-1);
}

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

// console.log(floor(3.7))
// console.log(floor(-3.7))
// console.log(floor(3.1))
// console.log(floor(-3.1))

console.log(ceil(4))
console.log(ceil(-3))
console.log(ceil(3))
console.log(ceil(-2))
console.log(ceil(0))

console.log(trunc(3.7))
console.log(trunc(-3.7))
console.log(trunc(3.1))
console.log(trunc(-3.1))

console.log(round(3.7))
console.log(round(-3.7))
console.log(round(3.1))
console.log(round(-3.1))
