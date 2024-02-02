// Suppose you want to simulate the throw of a die. In the simulation, you want it to randomly come up 1, 2, 3, 4, 5, or 6.

// The following code generates a pseudo-random number, with 16 decimal places, ranging
// from 0.0000000000000000 through 0.9999999999999999 and assigns it to the variable
// randomNumber

// let randomNumber = Math.random();

// The function always delivers a 16-place decimal that ranges from 0.0000000000000000 to 0.9999999999999999.
// We can convert the decimal to an integer by multiplying by one hundred quadrillion (1 followed by 17 zeroes):

// 0.0000000000000000 * 100000000000000000 = 0
// 0.7474887706339359 * 100000000000000000 = 7474887706339359
// 0.9999999999999999 * 100000000000000000 = 9999999999999999

// Trillions of possible numbers are more than we need in our virtual die throw. We just want six possible numbers, 1 through 6.
// So instead of multiplying by a hundred quadrillion, our first step is to multiply the giant decimal by 6.

// 0.0000000000000000 * 6 = 0
// 0.7474887706339359 * 6 = 4.7474887706339359
// 0.9999999999999999 * 6 = 5.9999999999999994


// we can give all the numbers an equal chance if we add 1 to the result, then round down. Here's the code for our virtual die throw.

// let bigDecimal = Math.random();
// let improvedNum = (bigDecimal * 6) + 1;
// let numberOfStars = Math.floor(improvedNum);

// console.log(numberOfStars);

// This is what happens in the code above, line by line:

// 1. Generates a 16-place decimal and assigns it to the variable bigDecimal.
// 2. Converts the 16-place decimal to a number ranging from 0.0000000000000000 through 5.9999999999999999, then adds 1, 
// so the range winds up 1.0000000000000000 through 6.9999999999999999. This number is assigned to the variable improvedNum.
// 3. Rounds the value represented by improvedNum down to the nearest integer that ranges from 1 through 6.