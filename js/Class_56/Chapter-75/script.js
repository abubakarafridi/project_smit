function Plan(name, price, space, transfer, pages, discountMonths) {
  this.name = name;
  this.price = price;
  this.space = space;
  this.transfer = transfer;
  this.pages = pages;
  this.discountMonths = discountMonths;
}

Plan.prototype.calcAnnual = function (percentifDesc) {
  var bestPrice = this.price;
  var currDate = new Date();
  var thisMo = currDate.getMonth();
  for (var i = 0; i < this.discountMonths.length; i++) {
    if (this.discountMonths[i] === thisMo) {
      bestPrice = this.price * percentifDesc;
      break;
    }
  }
  return bestPrice * 12;
};

let Plan1 = new Plan("hi", 32, 500, 1000, 10, [6, 7]);
// You can check to see if an object has a particular property by writing a simple statement
// like this.

// let gotTheProperty = "price" in Plan1;

// Here are the parts:

// the property in question, enclosed in quotes—in this case, ---price---
// the keyword ----in----
// the object, in this case, -----plan1-----

// Again, the question is, does the object named plan1 have a property called price? In
// other words, is there such a thing as plan1.price? In the example of three hosting plans that
// we've been using, plan1 does have a price, 3.99. So gotTheProperty is assigned true. But
// plan1 doesn't have a property named location. So if we write...
// var gotTheProperty = "location" in Plan1;
// ...the variable gotTheProperty is false.
// plan1 in the example also has a method named calcAnnual. A method is a type of
// property of an object, so if you write...

// var gotTheProperty = "calcAnnual" in Plan1;
// ...the variable gotTheProperty is true.

// var listOfProperties = [];
// for (var prop in Plan1) {
//   listOfProperties.push(prop);
// }


//  If you want a list of an object's properties, there's a spiffy way to do it:
// Line 1 declares an empty array, listOfProperties. Lines 2-4 cycle through all the
// properties of plan1, adding each property (push), including any methods, to the array
// listOfProperties. Using the example we've been working with, the array
// listOfProperties winds up with a value of
// "name,price,space,transfer,pages,discountMonths,calcAnnual".

// In the example, the method, calcAnnual, wasn't included in the original definition of the
// object plan1. It was later added to the prototype of the constructor function that I used to
// create the object, and so became a property of the object by inheritance. The code above
// includes inherited properties (including methods) in the collection. If you want to limit the list
// of properties to those that have been explicitly declared for the object, omitting those that are
// inherited from a prototype, you need to use hasOwnProperty.

// var listOfProperties = [];
// for (var prop in Plan1) {
//   if (Plan1.hasOwnProperty(prop)) {
//     listOfProperties.push(prop);
//   }
// }


// In the example above, each property in turn is assigned to the variable prop. Then the if
// statement tests to see if it's a property owned by the object as opposed to being inherited through a prototype.

// You can of course test a literal property name instead of using a variable.

// var isOwnProperty = Plan1.hasOwnProperty("calcAnnual");
// console.log(isOwnProperty);