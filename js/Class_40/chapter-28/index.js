// let currentAge = prompt("Enter your age.");

// JavaScript assigns the user's answer to currentAge as a string. Her entry, let's say 32,
// may look like a number to you, but to JavaScript it's a string: "32".
// Nevertheless, suppose you write...

// let currentAge = prompt("Enter your age.");
// let yearsEligibleToVote = currentAge - 18;

// console.log(yearsEligibleToVote);

// It probably goes without saying that the string you ask JavaScript to do math on has to be
// a number contained in quotes, like "50", not letter characters. If you write...

// var profit = "200" - "duck";
// console.log(profit);

// You may recall from a previous chapter that when you mix strings and numbers in an expression involving a plus, 
// JavaScript does the opposite of what you see in the examples above. Rather than converting strings to numbers, 
// JavaScript converts numbers to strings. Rather than adding, it concatenates.

// var result = "200" + 150;
// console.log(result);

// You can see there's going to be a problem with the following code.

// let currentAge = prompt("Enter your age.");
// let qualifying_Age = currentAge + 1;

// console.log(qualifying_Age);

// The code above has an unintended consequence. The string represented by currentAge is
// concatenated with 1 that has been converted to "1". Example: if the user enters "52," qualifyingAge is assigned not 53 but "521".

// If you want to do addition, you must convert any strings to numbers.

// let currentAge = prompt("Enter your age.");
// let qualifying_Age = parseInt(currentAge) + 1;

// console.log(qualifying_Age);
// Line 2 converts the string represented by currentAge to a number before adding 1 to it and assigning the sum to qualifyingAge.

// parseInt converts all strings, including strings comprising floating-point numbers, to integers.
// And shocking but true. It it doesn't round it simply lops off the decimals. 
// In the following statement, myInteger is assigned not 2 as you might expect, but 1.

// let myInteger = parseInt("1.99999");
// console.log(myInteger);

// To preserve any decimal values, use parseFloat. In the following statement myFractional is assigned 1.9999.

// let myFractional = parseFloat("1.999999");

// console.log(myFractional);