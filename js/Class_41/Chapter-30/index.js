// let price = 9.95;
// let salesTax = (price * 6.5) / 100;
// console.log(price + salesTax);

// The total is 10.59675
// We will charage her an amount rounded to 10.60

// let price = 9.95;
// let salesTax = (price * 6.5) / 100;
// let prettyTax = (price + salesTax).toFixed(2);
// console.log(prettyTax);

// The statement rounded the number to 2 places assigs that to prettyTax

// let price = 9.95;
// let salesTax = (price * 6.5) / 100;
// let prettyTax = (price + salesTax).toFixed();
// console.log(prettyTax);

// To shorten a number to no decimals, leave the parents empty


// toFixed() methods comes with surprise. if decimal ends in 5 it rounds up
// depending on browser it sometimes round up or down.
// example: if you apply 1.555, and use toFixed to 2 places it might give you "1.56" or "1.55"

// here is an elegant fix using previous methods

// let price = 1.555;
// let stringMethod = price.toString();
// if (stringMethod.charAt(stringMethod.length - 1) === '5') {
//     stringMethod = stringMethod.slice(0, stringMethod.length - 1) + '6';  
// }

// price = Number(stringMethod);
// price = price.toFixed(2);
// console.log(price);

// here is what's happening line-by-line
// Number to a string and assigns it to the variable stringMethod()
// Checks to see if the last character is "5"
// if so, slice off the "5" and attach "6"
// convert back to number
// rounds it to 2 places