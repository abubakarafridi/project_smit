// Here's a chart
// showing the three objects and their properties and method. Check out the last row, colored
// green in the table, the one representing the methods for the three objects...

// There's something inelegant about the green last row. The properties shown in the rows
// above it are customized for each object, but the method is always the same from object to
// object. The constructor function keeps duplicating the same method for each object, object
// after object. If we were to create 100 objects using the constructor, JavaScript would
// duplicate the same method 100 times, once for each object. It would work, but it ain't pretty.

// This table, which shows all of the objects sharing a single method, makes more sense.
// We want only one copy of the method, shared by all objects created with the constructor,
// no matter how many objects are created.

function Plan(name, price, space, transfer, pages, discountMonths) {
  this.name = name;
  this.price = price;
  this.space = space;
  this.transfer = transfer;
  this.pages = pages;
  this.discountMonths = discountMonths;
}

// How do we do it? With a prototype statement.
// First, we don't include the method in the constructor function, because that creates a copy
// of the method for every single object that's created with the constructor.
// Instead, we define the method as a prototype of the constructor, this way.

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

// Now, all objects created with the constructor Plan will share the same copy of the method calcAnnual.
// There's no unnecessary duplication.
// Except the first line, the method is coded exactly as I coded it when it was
// part of the constructor definition. Even the first line is the same, if you consider only the parts
// on the right side of the equal sign. The parts on the left side, connected by dots, are:

// The name of the constructor function, in this case "Plan"
// the keyword "prototype"
// The name of the method that all objects created with Plan will share, in this case "calcAnnual"
