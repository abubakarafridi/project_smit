// This is an object and five properties

// var plan1 = {
//     name : "Basic",
//     price : 3.99, 
//     space : 100,
//     transfer : 1000,
//     pages : 10
// };

// This only gets us basic plan i have to do it for professional ultimate plans that will be alot of work.
// We need a factory to crank out these things by dozons. Javascript gives us this factory.
// its constructor function.

function Plan(name, price, space, transfer, pages) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
}

// There are two diffrences between a constructor function and a normal function

// 1- The function name is Capitalize. It dosne't matter but its a converntion to distinguish between a normal and constructor function.
// 2- Each parameter is assigned to a variable but the variable is a property attached to some object whose name is not specified yet.
// The calling code will fill the object name and parameters values also.

// This is calling code that create the object for basic plan

// var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);

// This would just be a regular function call if it weren't for that "new" keyword. It's the keyword that
// tells JavaScript to create a new object. The name of the new object is plan1. Its properties are enumerated inside the parentheses.

// Now we can make as many objects as we want

var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
var plan2 = new Plan("Premium", 5.99, 500, 5000, 50);
var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);

// It's common to use the same names for parameters and properties, but you don't have to. You could write:

// function Plan(name, price, space, transfer, pages) {
//     this.doc = name;
//     this.grumpy = price;
//     this.sleepy = space;
//     this.bashful = transfer;
//     this.sneezy = pages;
// }