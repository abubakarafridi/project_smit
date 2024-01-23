// CHAPTER-22: Strings:Measuring length and extracting parts

// ===========EXAMPLE # 1==================
// first letter capital kare
// const name = "saylani";
// const firstLetter = name[0].toUpperCase();
// const remainingLetters = name.slice(1);
// const fullName = firstLetter + remainingLetters;
// console.log({ firstLetter, remainingLetters, fullName });
// console.log(fullName)
// ===========EXAMPLE # 1==================

// You've asked the user to give you the name of a city. You want to convert the name she's given you to a name with an initial cap. 
// Whether she's input "boston," "BOSTON", or "bosTon," you want to normalize the input to "Boston."

// A string is indexed like an array. Only, instead of each index number referring to an element, it refers to a character.
// Like array indexing, string indexing begins with 0.

// If you omit the second number inside the parentheses, JavaScript includes all the characters to the end of the string.

// var someChars = cityToCheck.slice(2);

// ===========EXAMPLE # 2==================
// let cityToCheck = "boSTon"

// let firstChar = cityToCheck.slice(0, 1);
// let otherChar = cityToCheck.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChar = otherChar.toLowerCase();
// let cappedCity = firstChar + otherChar;

// console.log(cappedCity);
// ===========EXAMPLE # 2==================

// Here's what happens in the code above, line-by-line:

// 1. Copies the first character of the string and assigns it to the variable firstChar.
// 2. Copies all the characters from the second one to the end and assigns them to the variable otherChars.
// 3. Caps the first character.
// 4. Lower-cases the other characters.
// 5. Concatenates both parts to re-form the whole string.

// ===========EXAMPLE # 3==================
// let month = prompt("Enter a month");
// let charsInMonth = month.length;
// if(charsInMonth > 3) {
//     console.log(month.slice(0, 3));
// }
// ===========EXAMPLE # 3==================

// ===========EXAMPLE # 4==================
// let str = prompt("Enter some text");
// let numChars = str.length;
// for(let index = 0; index < numChars; index++) {
//     if(str.slice(index, index + 2) === "  ") {
//         console.log("no double spaces allowed");
//     }
// }
// ===========EXAMPLE # 4==================