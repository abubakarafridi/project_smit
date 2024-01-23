// Atlantic Records has hired you and me to generate a list of names for future rap stars. To
// make things easy, we'll start by making separate lists of some first names and last names.

// But look, why not have JavaScript do the repetitive work? We'll use nested for statements.

// ---------------------------------EXAMPLE--------------------------------------------------
// let firstNames = ["BlueRay", "UpChuck", "Lojack", "Gizmo", "Do-Rag"];
// let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

// var fullNames = [];

// for (let fnames = 0; fnames < firstNames.length; fnames++) {
//     for (let lnames = 0; lnames < lastNames.length; lnames++) {
//         fullNames.push(firstNames[fnames] + lastNames[lnames]);
//     }
// }

// console.log(fullNames);
// ---------------------------------EXAMPLE--------------------------------------------------

// The inner loop runs a complete cycle of iterations on each iteration of the outer loop. If
// the outer loop counter is i and the inner loop counter is j, j will loop through 0, 1, 2, and
// all the way to the end while i is on 0. Then i will increment to 1, and j will loop through
// all of its values again. The outer loop is the minute hand of a clock. The inner loop is the
// second hand.
// You can have as many levels of nesting as you like.
// A nested loop is indented 2 spaces beyond its outer loop.

// -------practical examples to understand how to structure and use nested for loops.-----------

// We'll dive into the concept of nested for loops in JavaScript. Nested loops are loops within loops, 
// providing a powerful tool for iterating through multi-dimensional arrays and solving complex problems.

// ============================
// Exercise 1: Simple Nested Loop
// ============================

// let count = 0;

// for(let i = 1; i <= 3; i++) {
//     for(let j = 1; j <= 3; j++) {
//         console.log(`i:${i}, j: ${j}`);
//         count++;
//     }
// }

// console.log(count)

// ============================
// Exercise 1: Simple Nested Loop
// ============================

// ============================
// Exercise 1.1: Multiplication Table (5x5)
// ============================

// for(let i = 1; i <= 5; i++) {
//     for(let j = 1; j <= 5; j++) {
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }

// ============================
// Exercise 1.1: Multiplication Table (5x5)
// ============================