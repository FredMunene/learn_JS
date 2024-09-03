const dayOfTheWeek = {
    0 : 'Monday', 1 : 'Tuesday', 2: 'Wednesday', 3 : 'Thursday', 4 : 'Friday', 5 : 'Saturday', 6 : 'Sunday',
    7 : 'SecondMonday', 8 : 'SecondTuesday', 9 : 'SecondWednesday', 10: 'SecondThursday', 11: 'SecondFriday', 
    12 : 'SecondSaturday',13 : 'SecondSunday'

} 

function addWeek(date){
    var epoch = '0001-01-01' // Monday
    // split to get last digit 
    let splitDates = date.toISOString()
    var dateNum = splitDates.slice(8,10)
    console.log(dayOfTheWeek[Number(dateNum)-1])
}
// changes the time.takes an object as argument, returns a date
function timeTravel(obj){

    const futureDate = new Date();

    futureDate.setDate(obj.date.getDate())
    futureDate.setHours(obj.hour)
    futureDate.setMinutes(obj.minute);
    futureDate.setFullYear(obj.date.getFullYear());
    futureDate.setSeconds(obj.second);
    futureDate.setMonth(obj.date.getMonth())


    
    return futureDate.toString()

    //.toString()
}

// console.log(new Date('0001-01-01'))
// YYYY-MM-DDTHH:mm:ss.sssZ
let time = {
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
}
console.log(timeTravel(time))

addWeek(new Date('0001-01-01')) // Output: Monday
addWeek(new Date('0001-01-02')) // Output: Tuesday
addWeek(new Date('0001-01-07')) // Output: Sunday
addWeek(new Date('0001-01-08')) // Output: secondMonday
addWeek(new Date('0001-01-09')) // Output: secondTuesday