
function isValid(date){

    if (typeof date === 'number'){
        // if date is atimestamp, create a new Date object
        date = new Date(date);
    } 
    
    // console.log(dates)
    return  date instanceof Date && !isNaN(date.getTime())  ;
}

function isAfter(date1,date2){
    if (date1 == null || date2 == null){
        return false
    }
    if (!(date1 instanceof Date)) {
        date1 = new Date(date1);
    }
    if (!(date2 instanceof Date)) {
        date2 = new Date(date2);
    }

    // Check if the dates are valid
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        return false
    }
    return date1.getTime() > date2.getTime()
}

function isBefore(date1,date2){
    if (date1 == null || date2 == null){
        return false
    }
    if (!(date1 instanceof Date)) {
        date1 = new Date(date1);
    }
    if (!(date2 instanceof Date)) {
        date2 = new Date(date2);
    }

    // Check if the dates are valid
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        return false
    }
    return date1.getTime() < date2.getTime()
}

function isFuture(date){
    let now = new Date
    return isValid(date) && isAfter(date,now)
}
function isPast(date){
    let now = new Date
    return isValid(date) && isBefore(date,now)
}

// Testing the functions

// const date = new Date('2020-05-29 23:25:22');
// console.log(isValid(date)); // true if the date is valid

// const invalidDate = new Date();
// console.log(isValid(Date.now())); //

// const futureDate = new Date('2030-01-01');
// const pastDate = new Date('2010-01-01');

// console.log(isAfter(futureDate, pastDate)); // true
// console.log(isBefore(futureDate, pastDate)); // false
// console.log(isFuture(futureDate)); // true
// console.log(isPast(pastDate)); // true