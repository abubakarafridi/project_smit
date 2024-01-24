// Usually, averaging produces a fraction.
// You need to round it to the nearest integer so you can translate the number into stars.
// Suppose the average has been assigned to the variable scoreAvg.

// Here's the code that rounds it to the nearest integer.
// ======================================================
// let numberOfStars = Math.round(scoreAvg);
// ======================================================

// Things to keep in mind:

// Math. is how all math functions begin. The "M" must be capped.
// The function rounds up when the decimal is .5. It rounds 1.5 to 2, 2.5 to 3, etc. It rounds -1.5 to -1, -2.5 to -2, etc.


// Instead of a variable, you can enclose a literal number in the parentheses.

// let scoreAvg = Math.round(0.66645);
// console.log(scoreAvg);

// To force JavaScript to round up to the nearest integer, no matter how small the fraction,use ===ceil=== instead of round.
// The following code rounds .000001, which would normally round down to 0, up to the nearest integer, 1.

// let scoreAvg = Math.ceil(.000001);
// console.log(scoreAvg);

// ceil stands for ==="ceiling"=== It rounds .000001 up to 1, -.000001 up to 0, 1.00001 up to 2, and so on.

// To force JavaScript to round down to the nearest integer, no matter how large the fraction, use ===floor=== instead of round. 
// The following code rounds .999999, which would normally round up to 1, but with floor it is down to 0.

// let scoreAvg = Math.floor(0.9999999);
// console.log(scoreAvg);

// floor rounds .999999 down to 0, 1.9 down to 1, -.000001 down to -1, and so on.