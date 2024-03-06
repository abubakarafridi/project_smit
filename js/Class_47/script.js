// A function becomes very useful when you pass it data and it can deliver a custom response.

// Function become even more useful when it can pass data back to the calling code.

// let orderTotal;
// let merchTotal = +prompt("What is the Merch Total");
// if (merchTotal >= 100) {
//     orderTotal = merchTotal;
// }
// else if (merchTotal < 50.01) {
//     orderTotal = merchTotal + 5;
// }
// else {
//     orderTotal = merchTotal + 5 + (.03 * (merchTotal - 50));
// }

// console.log(orderTotal);

// If the merchTotal is 100 or more then the orderTotal is the same as merchTotal.
// If the merchTotal is 50 or less then the orderTotal is merchTotal + 5.
// If the merchTotal is between 50 or 100 then the orderTotal is merchTotal + 5 + 3 percent of the amount over 50$.

// if cost is $150 is $150 total.
// if cost is $40 is $45 total.
// if cost is $70 is $75.60 total.

// function totalCost(merchTotal) {
//   let orderTotal;
//   if (merchTotal >= 100) {
//     orderTotal = merchTotal;
//   } 
//   else if (merchTotal < 50.01) {
//     orderTotal = merchTotal + 5;
//   } 
//   else {
//     orderTotal = merchTotal + 5 + 0.03 * (merchTotal - 50);
//   }
//   return orderTotal;
// }

// We delare a variable orderTotal in the function.
// What new here is that function returns the value held in orderTotal to calling function.

// But calling code need something to catch that data for that we use variable.

// let totalToCharge = totalCost(79.99);

// If you are new to coding you may think that how can a function be assigned to a variable.
// You may be familiar seeing that a value, a variabel, or a arithmetic or other expression assigned to a variable.

// let totalToCharge = 85.00;
// let totalToCharge = merchTotal;
// let totalToCharge = merchTotal + ship + tax;

// What you are assigning is the value passed by return statement of the function totalCost.
// Assign the value return by totalCost to variable totalToCharge.

// So now that the calling code passes the value 79.99 to the function.
// Function parameter merchTotal is used throughtout the function.
// The Cost is calculated and assigned to orderTotal which is returned.
// The returned value is assigned to totalToCharge.

// alert(totalCost(79.99));

// You can use function as expression
// let orderTotal = merchTotal + totalCost(merchTotal);

// You can use function in a function call
// let tot = calc(merchTot, totalCost(merchTot));

// Within a function, you can call another function
// function totalCost(price) {
//     return price + totalCost(price);
// }