// my program for saturday 10
// let date = new Date();
// let myday = date.getTime();

// let date2 = new Date("Feb 10, 2024, 14:00:00");
// let spacifyDay = date2.getTime();

// let calculate = spacifyDay - myday;
// calculate = calculate / (1000 * 60 * 60 * 24);
// console.log(calculate.toFixed(2));

// creating a date object for the current date and time.

let today = new Date();

// Creating a new Date object for the year 2035 June 30.

let loss = new Date("June 30, 2035");

// date is specify in quotes. After month there is a comma after the day of the month. The year is in four digits

let mstoday = today.getTime();
let msloss = loss.getTime();

// Now get the time in millisecond by using getTime().

let msDiff = msloss - mstoday;

// to get the differece in millisecond.

let targetDay = msDiff / (1000 * 60 * 60 * 24);

// The large number inside the parans is 1000 for converting millisecnd in second, 60 for minutes, 60 for hours, and 24 for days 

console.log(Math.floor(targetDay));

// you dont want the whole decimal reduce by math.floor or math.ceil.
