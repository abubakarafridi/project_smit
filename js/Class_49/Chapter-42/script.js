// While loop Instruction

// Delared and define the counter before while loop.
// While loop stated with a condition how long the loop should run.
// execute the statements inside the brackets.
// Inside the brackets there is incrementer at final statement.

// var i = 0;
// while (i < 5) {
//     alert(i);
//     i++;
// }

// A do-while loop is the same as while loop

// var i = 0;
// do {
//     alert(i);
//     i++
// } while(i < 5);

// There are two difference between those two loops

// - The do while starts with do.
// - The while condition is used in the end of the do-while loop for how long the loop should run.
// The while in the end. Ends with a semicolon.

// The difference between a while loop and a do-while loop.
// Is that a while loop condition if it is false never runs.
// If a do-while condition is false is the code will run 1 time always.
// Consider this

// while loop
var i = 0;
while (i < 0) {
    alert(i);
    i++;
}

// do-while loop
var i = 0;
do {
    alert(i);
    i++;
} while (i < 0);