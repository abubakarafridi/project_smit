// CHAPTER-12 IF...ELSE AND ELSE IF STATEMENT

// badal ha to barish, nahi to nahi
// const badal = true;

// agr badal ho 
// if (badal) {
//   alert("Its gonna be raining soon in peshawer!");
// }

// agr badal na ho
// if(!badal){
//     alert("no chance of rain in peshawar!");
// }


// using if-else
// if (badal) {
//     alert("Its gonna be raining soon in peshawer!");
// }else{
//     alert("no chance of rain in peshawar!");
// }

// real world example
// const bhook = true;
// const paisa = false;

// if(bhook && paisa)
// {
//     alert("Get the burger");
// }else {
//     alert("chill karo");
// }

// question: negate value or variable

// negating value, allowed
// const badal = !false;
// console.log(badal);

// negating value, allowed
// const badal = false;
// console.log(!badal);

// negating variable right at the time of declaration, not allowed
// const !badal = false;
// console.log(badal);

// PROGRAM: EVEN/ODD
// const userName = prompt("Please apna name to bataiyega");
// const userInput = +prompt("Please 1 number dijyega");

// const remainder = userInput % 2;

// if (remainder === 0) {
//     alert(userName + " Bhai ap ne Even number enter kia.");
// } else {
//     alert(userName + " Bhai ap ne ODD number enter kia");
// }