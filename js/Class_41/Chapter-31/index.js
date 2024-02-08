// But what is the current date and time?
// Here's how Javascript finds out.

// let rightNow = new Date();
// console.log(rightNow);

// The statement above create a Date object.

// Javascript gets info from user computer settings if its accurate then date will be accurate.
// The Date object my look like a string but its isn't.
// Can't use string methonds chatAt, indexOf, or slice.

// let rightNow = new Date();
// let dateString = rightNow.toString();
// console.log(dateString);

// rightNow is a Date object and is converted to a string assigns it to dateString.
// Most Times, you'll just need some info of the Date object. without it being string.

// let rightNow = new Date();
// let theDay = rightNow.getDay();
// console.log(theDay);

// The code creates a date object, assigs it to rightNow.
// theDay extract the day of the week.
// I show you in diagram that the day is Tue.
// But here it is in number. The day is design in number.
// You need a bit more coding to convert it to name.

// let date = new Date();
// let day = date.getDay();
// let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(dayNames[day]);

// Here what is going on:

// 1- Creates a Date object and assigns it to date
// 2- Extract the day by getDay() method and assigns it to day
// 3- Creates an array start with "Sun" and assigns it to dayNames
// 4- print it by spacifing the index in dayNames