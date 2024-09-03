//  Common JS : import statement
const {isValid} = require('date-fns/isValid')

function isAfter(date1,date2){
    return date1.getTime() > date2.getTime()
}

function isBefore(date1,date2){
    return date1.getTime() < date2.getTime()
}

function isFuture(date){
    return isValid(date) && date.getTime() > Date.now()
}
function isPast(date){
    return isValid(date) && date.getTime() < Date.now()
}

const date = new Date('2020-05-29 23:25:22');
console.log(isValid(date)); // true if the date is valid

const invalidDate = new Date('Invalid Date String');
console.log(isValid(invalidDate)); //

// Testing the functions
const futureDate = new Date('2030-01-01');
const pastDate = new Date('2010-01-01');

console.log(isAfter(futureDate, pastDate)); // true
console.log(isBefore(futureDate, pastDate)); // false
console.log(isFuture(futureDate)); // true
console.log(isPast(pastDate)); // true