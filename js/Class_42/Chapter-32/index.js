// summary of important methods of date object.

// getDay()           -> day of week      -> 0-6   -> 0 is sunday
// getMonth()         -> month            -> 0-11  -> 0 is januray
// getDate()          -> day of the month -> 1-31  -> 1 is 1st of the month
// getFullYear()      -> year             -> ----  -> 2024
// getHours()         -> hour             -> 0-23  -> 0 is midNight, 12 is noon, 23 is 11 p.m
// getMinutes()       -> minute           -> 0-59  -> ----
// getSeconds()       -> second           -> 0-59  -> ----
// getMilliseconds()  -> millisecond      -> 0-999 -> ----

// getTime() -> Millisecond sice midnight, January 1, 1970

// getDay is covered in last chapter.let look the rest of the methods of date object.
// All the methods give you not name but number.
// The following code give you 0 for janurary and 11 for Decembar.

// let d = new Date();
// let currentMonth = d.getMonth();
// console.log(currentMonth);

// getDate() give you the number of day of the month

// let d = new Date();
// let currentDay = d.getDate();
// console.log(currentDay);

// getFullYear() gives you a 4-digit number for the year

// let y = new Date();
// let currentYear = y.getFullYear();
// console.log(currentYear);

// getHours() gives you a number from 0 through 23 corresponding to midnight through 11 p.m

// let h = new Date();
// let currentHour = h.getHours();
// console.log(currentHour);

// getMinutes() gives you a number from 0 to 59.

// let m = new Date();
// let currentMinutes = m.getMinutes();
// console.log(currentMinutes);

// getSeconds gives you a number from 0 to 59.

// let s = new Date();
// let currentSecond = s.getSeconds();
// console.log(currentSecond);

// getMilliseconds gives you a number from 0 to 999.

// let d = new Date();
// let milli = d.getMilliseconds();
// console.log(milli)

// getTime gives you time from 1970 midnight.

// let d = new Date();
// let time = d.getTime();
// console.log(time);