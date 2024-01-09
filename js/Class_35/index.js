// var cleanestCities = [
//   "Cheyenne",
//   "Santa Fe",
//   "Tucson",
//   "Great Falls",
//   "Honolulu",
// ];

// var cityToCheck = prompt("Enter a city name");

// if (cityToCheck === cleanestCities[0]) {
//   alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[1]) {
//   alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[2]) {
//   alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[3]) {
//   alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[4]) {
//   alert("It's one of the cleanest cities");
// } else {
//   alert("It's not on the list");
// }

// var cityToCheck = prompt("Enter a city name");

// for(var i = 0; i <= 4; i++) {
//     if(cityToCheck === cleanestCities[i]) {
//         alert("it's one of the cleanest cities")
//     }
// }

// Let me break down the first line for you.
// The first line begins with the keyword for.
// The three specifications that define the loop are inside the parentheses.

// 1. A variable that counts iterations and also serves as the changing array index is declared
// and set to a starting value, in this case 0.
// 2. The limit on the loop is defined. In this case, the loop is to keep running as long as the
// counter doesn't exceed 4. Since the counter, in this case, is starting at 0, the loop will run 5 times.
// 3. What happens to the counter at the end of every loop. In this case, the counter is
// incremented each time.

// The three specifications inside the parentheses are always in the same order:
// 1. What to call the counter (usually i) and what number to start it at (typically 0)
// 2. How many loops to run (in this case, the number of elements in the array)
// 3. How to change the counter after each iteration (typically to add 1 each time through)

// Things to keep in mind:

// In the example, the counter, i, serves two purposes. It keeps track of the number of
// iterations so looping can halt at the right point. And it serves as the index number of the
// array, allowing the code to progress through all the elements of the array as the counter
// increments with each iteration.

// There is nothing sacred about using i as the counter. You can use any legal variable
// name. But coders usually use i because it keeps the first line compact, and because
// coders understand that i stands for "iteration."

// In the example, the initial count is 0, the index number of the first element of the array. But
// it could be any number, depending on your needs.

// In the example, the counter increments with each iteration. But, depending on your needs,

// you can decrement it, increase it by 2, or change it in some other way each time through.
// In the example, I specify that the loop is to run as long as i <= 4. Alternatively, I could
// have specified i < 5. Either way, since the counter starts at 0, the loop runs 5 times.

// A flag is just a variable that starts out with a default value that you give it,
// and then is switched to a different value under certain conditions.

// var matchFound = "no";

// If a match is found, the value of the flag is changed. At the end, if the flag hasn't been
// changed. If it still has the original value of "no". It means no match was found, and so we
// display an alert saying the city isn't on the list.

// var cleanestCities = [
//     "Cheyenne",
//     "Santa Fe",
//     "Tucson",
//     "Great Falls",
//     "Honolulu",
// ];

// var cityToCheck = prompt("Enter a city name");

// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//       alert("It's one of the cleanest cities");
//       matchFound = "yes";
//     }
// }

// if (matchFound === "no") {
//   alert("It's not on the list");
// }

// This works, but rather than assigning the strings "no" and "yes" to the switch, it's
// conventional to use the Boolean values false and true.

// var cleanestCities = [
//   "Cheyenne",
//   "Santa Fe",
//   "Tucson",
//   "Great Falls",
//   "Honolulu",
// ];

// var cityToCheck = prompt("Enter a city name");

// var matchFound = false;
// for (var i = 0; i <= 4; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     alert("It's one of the cleanest cities");
//   }
// }
// if (matchFound === false) {
//   alert("It's not on the list");
// }

// There are only two Booleans, true and false. Note that they aren't enclosed in quotes.

// The next problem with our example is that it potentially wastes computing cycles.
// Suppose on the second loop a match is found and the alert displays. The way the loop is
// coded, the loop goes on looping all the way to the end. This is unnecessary, since we got our
// answer in the second loop. The problem is solved with the keyword break.

// var cleanestCities = [
//   "Cheyenne",
//   "Santa Fe",
//   "Tucson",
//   "Great Falls",
//   "Honolulu",
// ];

// var cityToCheck = prompt("Enter a city name");

// var matchFound = false;
// for (var i = 0; i <= 4; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     alert("It's one of the cleanest cities");
//     break;
//   }
// }
// if (matchFound === false) {
//   alert("It's not on the list");
// }

// The last problem: In the example, I assume that the number of elements in the array is
// known. But what if it isn't? JavaScript has a way of finding out. The following code assigns the
// number of elements in the array cleanestCities to the variable numElements.


// var cleanestCities = [
//   "Cheyenne",
//   "Santa Fe",
//   "Tucson",
//   "Great Falls",
//   "Honolulu",
// ];

// var cityToCheck = prompt("Enter a city name");

// var numElements = cleanestCities.length;

// Now we can limit the number of loops to the count that JavaScript comes up with.

// var matchFound = false;
// for (var i = 0; i < numElements; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     alert("It's one of the cleanest cities");
//     break;
//   }
// }
// if (matchFound === false) {
//   alert("It's not on the list");
// }

// Now the loop keeps going as long as i is less than the number of elements. (Since the
// length number is 1-based and the i number is 0-based, we need to stop 1 short of the length.)