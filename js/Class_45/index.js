// Function is a block of code that does the same thing again and again whenever you call(invoke) it.
// It save time for not repeating you'r code and make it easier to understand code.

// suppose in your website you want to show current time in different pages.

// let now = new Date();
// let hour = now.getHours();
// let minute = now.getMinutes();
// console.log(`${hour}::${minute}`);

// You can write a function that can be call once by its name and not code the whole thing again and again.

function tellTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    console.log(`${hour} :: ${minute}`); 
}

// tellTime();

// The same code that we did for hour and minute is no inside the function.

// Parts Of A Funtion

// 1. On line 1 an opening declaration statement that includes:
// • the keyword function
// • a name I made up for the function
// • parentheses that identify it as a function
// • an opening curly bracket to enclose the code that will execute
// 2. On lines 2 through 5 the same block of code that you saw before executes.
// 3. On line 6 a closing curly bracket on its own line to enclose the code that will execute.


// Calling code (the that invokes the function) is stating the name with parentheses.

tellTime();