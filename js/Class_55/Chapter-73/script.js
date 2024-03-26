// If you're creating more than one object with the same pattern of properties and methods,
// it's a convenience to build the method as well as the properties into the constructor function.
// In the following code, the constructor creates the same method for every object that is
// created, as it creates all the properties for each object.

function Plan(name, price, space, transfer, pages, discountMonths) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    this.calcAnnual = function(percentIfDisc) {
        let bestPrice = this.price;
        let currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        for (let i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === currentMonth) {
                bestPrice = this.price * percentIfDisc;
                break;
            }
        }
        return bestPrice * 12;
    }
}

// line 13 the beginning of the method definition
// 1- like the property definition above it. It also start with keyword refering to the object that it is being created in.
// 2- next three pieces are the same. a dot, method name, and equal sign.
// 3- The next piece is different the keyword function.
// 4- In this case, a single parameter is inside the parentheses, percentIfDisc. This is not a parameter that's part of the constructor.
// It's a parameter of the method that the constructor will create for each object. A value is passed to it not when a new object is created using
// the constructor, but when the method, having already been created along with its object via the constructor, is called.

let p1 = new Plan("Basic", 3.99, 100, 1000, 10, (6, 7)); 
let p2 = new Plan("Premium", 5.99, 500, 5000, 50, (6, 7, 11));
let p3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, (6, 7));

// Once the objects and their properties and method are created by the code above, 
// this is the code that calls, for example, the method for the Premium plan.

let annualPrice = p2.calcAnnual(0.85);

// The main difference between a constructor method and a object method is the first line

// The code when method in object is created without constructor

// calcAnnual : function(percentIfDisc) {

// The code when method in object is created with constructor

// this.calcAnnual = function(percentIfDisc) {

// There are two other differences. Constructor function the method definition starts with an assignement (some = some).
// You need a semicolon after the closing brackets and no comma is necessary if another property or method definition follows.
