function makeInvisible() {
  document.getElementById("ugly").className = "hidden";
}

// When the function is called, it assigns the "hidden" class to img tag

// Thing to keep in mind
// 1. document.getElementById(--).value (for form fields)
//    document.getElementById(--).innerHTML (for paragraph, divs, other html elements)
// 2. Its className in camel case, not class.
// 3. Assigning a class to an element replaces any class that element have in a static markup.

// If you want to add a class to an event but dont want to replace it with the existing class you can do that.
// Let's say an element has an id "p1". This is the function

function makeBig() {
    document.getElementById("p1").className += " Big";
}

// Comparing code with the one that removes existing class
// 1. It is a += instead of just =.
// 2. A space before the class name is required.