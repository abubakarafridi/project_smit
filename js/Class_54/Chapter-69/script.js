// I have seen comparing different packages offers by websites

// If you want to use the data you could by assigning each value to different variable.

// var plan1Name = "Basic";
// var plan1Price = 3.99;
// var plan1Space = 100;
// var plan1Data = 1000;
// var plan1Pages = 10;
// var plan2Name = "Professional";
// var plan2Price = 5.99;
// var plan2Space = 500;
// var plan2Data = 5000;
// var plan2Pages = 50;
// var plan3Name = "Ultimate";
// var plan3Price = 9.99;
// var plan3Space = 2000;
// var plan3Data = 20000;
// var plan3Pages = 500;

// An alert showing the plan name and price

// alert("The cost of " + plan2Name + " package is $" + plan2Price + " per Month");

// alert displaying "The cost of professional package is $5.99 per month"

// Assinging all this values to a variable can lead to problems if things gets complicated.

// To handle this in better way is to use objects and properties.
// This accurately reflects the 2 dimensional, gridlike nature of the websites company's that we started with.

// In example each hosting plan is an object - plan 1, plan 2, plan 3.
// Each object has 5 properties - name, cost, space, transfer, pages.
// Properties are just variables that are atteched to an object.
// In this case there is one string properties, and four number properties.

// In code we refer to properties and object with dot notation.

// alert("The cost of " + plan2.name + " package is $" + plan2.Price + " per Month");

// plan2.name represents "Professional". plan2.Price represents 5.99

// objects and properties difinition

var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer: 1000,
  pages: 10,
};

// The code starts with var followed by object name and then equal sign.
// After that curly brackets and not a value like variables.
// Each properties begin with a name, followed by a colon and then a value.
// Each properties ends with comma except the last one
// The closing curly bracket is followed by a semicolon.

// Now lets add another property if the customer buy the package in the month of july, august,
// December the customer gets 20 percent discount.

plan1.discountMonths = [6, 7, 11];

// The statement creates a new property in object plan1.
// and assign array to property representing the three months when the customer gets discount.

// You refers to the element of the array property the same as array but using a dot notation

var mo = plan1.discountMonths[0];

// The statement assign first element of the array property discountMonth.