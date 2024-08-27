// sign takes one number argument, returns 1 if number is positive, 
// -1 if number is negative, 0 if the number is 0
const sign = (number) => {
    if (number > 0) {
        return 1
    } else if (number === 0){
        return 0
    } 
        return -1

}
// sameSign takes 2 numbers as arguments and 
// returns true if they both have the same sign, or false otherwise.
const sameSign = (num1,num2) => {
    if (num1 >= 0 && num2 >= 0){
        return true
    } else if (num1 < 0 && num2 < 0){
        return true
    } 
        return false
}

console.log(sign(-5))
console.log(sameSign(0,0))