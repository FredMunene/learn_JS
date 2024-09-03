const dayOfTheWeek = {
    0 : 'Monday', 1 : 'Tuesday', 2: 'Wednesday', 3 : 'Thursday', 4 : 'Friday', 5 : 'Saturday', 6 : 'Sunday',
    7 : 'secondMonday', 8 : 'secondTuesday', 9 : 'secondWednesday', 10: 'secondThursday', 11: 'secondFriday', 
    12 : 'secondSaturday',13 : 'secondSunday'

} 

function addWeek(date){
    const epoch = new Date ('0001-01-01')  // Monday
    const timeDiffer = date.getTime() - epoch.getTime();

    var days = Math.floor(timeDiffer/(24*60*60*1000)) % 14;

    return dayOfTheWeek[Number(days)]
}
// changes the time.takes an object as argument, returns a date
function timeTravel(obj){

    const futureDate = new Date(obj.date);

    futureDate.setHours(obj.hour)
    futureDate.setMinutes(obj.minute);
    futureDate.setSeconds(obj.second);
    
    return futureDate

}

// console.log(new Date('0001-01-01'))
// YYYY-MM-DDTHH:mm:ss.sssZ
// let time = {
//     date: new Date('2020-05-29 23:25:22'),
//     hour: 21,
//     minute: 22,
//     second: 22,
// }
// console.log(timeTravel(time))

// addWeek(new Date('0001-01-01'))  // Output: Monday
// addWeek(new Date('0001-01-02')) // Output: Tuesday
// addWeek(new Date('0001-01-07')) // Output: Sunday
// console.log(addWeek(new Date('0001-01-08')) )// Output: secondMonday
// addWeek(new Date('0001-01-09')) // Output: secondTuesday