const multiply = (a,b) => {
    let count = 0
    let res = 0

    while ( count < b){
        res+=a
        count++
    }

    return res
}

console.log(multiply(2,3))

const divide = (a,b) => {
    let count = 0

    while (a >= b){
        a-=b
        count++
    }

    return count
}

console.log(divide(6,3))

const modulo = (a,b) => a - multiply(divide(a,b),b)

console.log(modulo(6,4))