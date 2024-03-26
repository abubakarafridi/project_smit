// We could write a function that would calculates the annual charge based on the chart prices.
// The customer get discount if he sign ups for any package in curtain months of the year.
// For basic july, august he get 20 percent discount.
// For professional july, august, and december he get 20 percent discount.
// For ultimate july, august, he get 20 percent discount.

// var plan1 = {
//     name : "basic",
//     price : 3.99,
//     space : 100,
//     transfer : 1000,
//     pages : 10,
//     discountMonths : [6, 7],
// };

// function calcAnnual() {
//     var bestPrice = plan1.price;
//     var currentDate = new Date();
//     var thisMo = currentDate.getMonth;
//     for(var i = 0; i < plan1.discountMonths.length; i++) {
//         if(thisMo === plan1.discountMonths[i]) {
//             bestPrice = plan1.price * 0.8;
//             break;
//         }
//     }
//     return bestPrice * 12;
// }

// The function calcAnnual cycles through all the discount months (line 20) checking to see if any of them
// happen to be the current month (line 21). If so, it calculates a 20 percent discount by multiplying
// the regular price by .8. Then it multiplies the monthly price, discounted or not, by 12, to get the
// annual price, and returns the number to the calling code (line 26).


// Lets make the function more flexible so the discount rate can very, depending on the value the calling code passes it.
// The percentage to be charged is passed to percentIfDesc.

// function calcAnnual(percentIfDesc) {
//     var bestPrice = plan1.price;
//     var currentDate = new Date();
//     var thisMo = currentDate.getMonth;
//     for(var i = 0; i < plan1.discountMonths.length; i++) {
//         if(thisMo === plan1.discountMonths[i]) {
//             bestPrice = plan1.price * percentIfDesc;
//             break;
//         }
//     }
//     return bestPrice * 12;
// }

// The calling code. that passes the value to the function.

// var annualPrice = calcAnnual(0.85);

// We can also insert a function to an object and the funtion becomes the function method.
// The function object is no different and does the same task as normal function.
// The function is now inserted into the calcAnnual object and now is object method

// var plan1 = {
//     name : "basic",
//     price : 3.99,
//     space : 100,
//     transfer : 1000,
//     pages : 10,
//     discountMonths : [6, 7],
//     calcAnnual : function(percentIfDesc) {
//         var bestPrice = plan1.price;
//         var currentDate = new Date();
//         var thisMo = currentDate.getMonth();
//         for(var i = 0; i < plan1.discountMonths.length; i++) {
//             if(plan1.discountMonths[i] === thisMo) {
//                 bestPrice = plan1.price * percentIfDesc;
//                 break;
//             }
//         }
//         return bestPrice * 12;
//     }
// };

// 1- Except for the first line, every line of the method is identical to the code I used to create
// for normal function that we started with.
// 2- The method definition begins the same way a property definition begins, with the name followed by a colon.
// 3- A comma ends every property definition and method definition except for the last property or method.
// If you were to add a property or method below the calcAnnual method definition,
// you'd need to insert a comma after the closing curly bracket of the calcAnnual definition.
// 4- Parameters, if there are any, go inside the parens, as in any function definition.

// This is how you'd call the method.

// var annualPrice = plan1.calcAnnual(.85);

// Refining the above object instead of using plan1.price we would use this.price.
// Which start with this keyword followed by dot and the property.

let plan1 = {
    name : "basic",
    price : 3.99,
    space : 100,
    transfer : 1000,
    pages : 10,
    discountMonths : [6, 7],
    calcAnnual : function(percentIfDesc) {
        let bestPrice = this.price;
        let currentDate = new Date();
        let thisMo = currentDate.getMonth();
        for(var i = 0; i < this.discountMonths.length; i++) {
            if(this.discountMonths[i] === thisMo) {
                bestPrice = this.price * percentIfDesc;
                break;
            }
        }
        return bestPrice * 12;
    }
};

// When you write this.whatever, JavaScript is smart enough to understand that you're
// referring to a property of the object that's being defined—in this case, plan1.