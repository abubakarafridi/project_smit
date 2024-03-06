// CHAPTER ------- 39

// Consider this chain of conditional statement
// let dayOfWeek = prompt("What is the day of the week");

// if (dayofWeek === "Sat" || dayofWeek === "Sun") {
//     alert("Whoopee!");
// } else if (dayofWeek === "Fri") {
//     alert("TGIF");
// } else {
//     alert("Shoot me now!");
// }

// If it is weekend then alert Whoopee!
// If it is friday then alert TGIF!
// If it is other weekdays then alert shoot me now!

// The switch statement duplicates the functionality of the example above

// switch (dayOfWeek) {
//     case "Sat" :
//         alert("Whoopee!");
//         break;
//     case "Sun" :
//         alert("Whoopee!");
//         break;
//     case "Fri" :
//         alert("TGIF!");
//         break;
//     default :
//         alert("Shoot me now!");
// }

// Just focus on the first three lines of code
// - Begins with a switch keyword with parenthesis and inside those is the variable that is tested against and open curly bracket.
// - The second line Begins with the keyword case and followed by the expected result from dayOfWeek  and space and a colon.
// - The third line Runs if the test is passed and any number of statement is executed.

// CHAPTER ------- 40

let dayOfWeek = prompt("What is the day of the week");

switch (dayOfWeek) {
    case 'Sat' :
        alert("Whoopee");
        break;
    case 'Sun' :
        alert("Whoopee");
        break;
    case 'Fri' :
        alert("TGIF");
        break;
    default:
        alert("Shoot me now!");
}

// This Chapter we will discuss the whole code.
// A switch statement works similarly as IF statement.
// If the case is true the statements executes.

// Why do all the cases except the last one include a break statement?
// After a true case is found. JavaScript not only executes the statement below that case.
// if break statement is not found it executes all the statement for all the cases below.
// So after true case is found and the conditional code executes you need to jump out of the switch block by coding a break statment
// If you forgot break statment in the above code, this happens:

// 1. An alert displays saying "Whoopee!"
// 2. A second alert displays saying "Whoopee!"
// 3. A third alert displays saying "TGIF!"
// 4. A fourth alert displays saying "Shoot me now."


// Now let's look at

// default :
// alert("Shoot me now!");

// The keyword default works like else in an if-else statement.
// The code executes if none of the conditions above are met.
// if dayOfWeek isn't "Sat", "Sun", or "Fri".
// then default is run and displays "Shoot me now".
// There is no break statement. That's because default always comes last,

