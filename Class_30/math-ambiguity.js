// Complex arithmetic expressions can pose a problem, one that you may remember from
// high school algebra. Look at this example and tell me what the value of totalCost is.

// let totalCost = 1 + 3 * 4;
// console.log(totalCost);

// But you don't have to memorize JavaScript's complex precedence rules. You can finesse
// the issue by using parentheses to eliminate ambiguity. Parens override all the built-in
// precedence rules. They force JavaScript to complete operations enclosed by parens before
// completing any other operations.

// If I move the parentheses, the arithmetic is done in a different order. In this next statement,
// the placement of the parens tells JavaScript to first add 1 and 3, then multiply by 4. The result
// is 16.

// let totalCost = (1 + 3) * 4;
// console.log(totalCost);

// let resultOfComputation = (2 * 4) * 4 + 2;

// console.log(resultOfComputation);

// let resultOfComputation = ((2 * 4) * 4) + 2;

// console.log(resultOfComputation);