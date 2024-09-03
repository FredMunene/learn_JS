
function isValid(date){
    // check param is of type Date
    var dates;
    if (typeof date === 'number'){
        // if date is atimestamp, create a new Date object
        dates = new Date(date);
    } else if (!(date instanceof Date)){
        // if it's not a Date object nor a timestamp
        return false;
    } else {
        dates = date;
    }
    
    // console.log(dates)
    return !isNaN(dates.getTime())  ;
}

function isAfter(date1,date2){
    if (!(date1 instanceof Date)) {
        date1 = new Date(date1);
    }
    if (!(date2 instanceof Date)) {
        date2 = new Date(date2);
    }

    // Check if the dates are valid
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        throw new Error("Invalid date input");
    }
    return date1.getTime() > date2.getTime()
}

function isBefore(date1,date2){
    if (!(date1 instanceof Date)) {
        date1 = new Date(date1);
    }
    if (!(date2 instanceof Date)) {
        date2 = new Date(date2);
    }

    // Check if the dates are valid
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        throw new Error("Invalid date input");
    }
    return date1.getTime() < date2.getTime()
}

function isFuture(date){
    if (!(date instanceof Date)) {
        date = new Date(date);
    }

    // Check if the dates are valid
    if ( isNaN(date.getTime())) {
        throw new Error("Invalid date input");
    }
    return isValid(date) && date.getTime() > Date.now()
}
function isPast(date){
    if (!(date instanceof Date)) {
        date = new Date(date);
    }

    // Check if the dates are valid
    if ( isNaN(date.getTime())) {
        throw new Error("Invalid date input");
    }
    return isValid(date) && date.getTime() < Date.now()
}

// Testing the functions

// const date = new Date('2020-05-29 23:25:22');
// console.log(isValid(date)); // true if the date is valid

const invalidDate = new Date('Invate String');
console.log(isValid(Date.now())); //

// const futureDate = new Date('2030-01-01');
// const pastDate = new Date('2010-01-01');

// console.log(isAfter(futureDate, pastDate)); // true
// console.log(isBefore(futureDate, pastDate)); // false
// console.log(isFuture(futureDate)); // true
// console.log(isPast(pastDate)); // true