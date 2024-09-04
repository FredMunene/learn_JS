function firstDayWeek(number,string){
    // number : week of the year 1-53
    // string : the year
    // return a string; the date of first day of that week(dd-mm-yyyy)
    let year = Number(string)
    let date = new Date(year,0,1) // Month is 0-indexed (0 = January)
   
    let dayOfWeek = date.getDay(); // Day of the week for 1st January
    
    console.log(dayOfWeek) // 0 : Monday
    let daysToAdd = (number )*7; // days to add starting from week 1 to reach start of specified week
    console.log((daysToAdd))
    if (dayOfWeek != 0) { // if its not a Monday
        daysToAdd++
    } else if (dayOfWeek > 1){
        daysToAdd += (8 - dayOfWeek); // move to the next Monday
    }
    let duration = daysToAdd * 24 * 60 * 60 * 1000
    // date.setYear(Number(string))
    // weeks -- days
    // 
    let newDate = new Date() 
    newDate.setTime(date.getTime() + duration)

    // if the date is in the next year 
    // if (newDate.getFullYear() < year && number > 1 )

    // use of template literals allow embedding expressions within a string
    let formattedDate = `${String(newDate.getDate())}-${String(newDate.getMonth())}-${String(newDate.getFullYear())}`;
    return formattedDate;
}

// get milliseconds to that year
// add milliseconds for that week
console.log(firstDayWeek(11,'2023'))