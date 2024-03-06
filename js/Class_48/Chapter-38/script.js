// A global variable is one that is not declared inside a function but in the main body.

// A local variable is one that is declared inside a function. It can be in a parameter of a function
// or a variable declared explicitly in the function with the var or let or const keyword.

// A global variable is meaningful in every section of the code whether it is in main body or ina function

// A local variable is meaningful only within that fuction that is delared in.

// Global Variable
// - Declared in the main code.
// - Known everywhere, useable everywhere.

// Local Variable
// - Declared in a function.
// - Known only inside the function, useable only inside the function.

// First in main code variable declaration followed by a call to a function

// var theSum;
// addNumbers();

// The Function

// function addNumbers() {
//     theSum = 2 + 2;
// }

// In the example theSum is a global variable which is delared in the main code
// The function addNumbers is called to assign it a value.
// The function assigns the sum of 2 + 2 to theSum.
// theSum can be used in any function in the entire program.

// alert(theSum);

// Whereever I write it in main code or in functions and alert will display 4.
// But if I delared the variable in the function not in the main code.

function addNumbers() {
    var theSum = 2 + 2;
    console.log(theSum);
}

addNumbers();

// The variable has a value of 4 everywhere else it is unknown
// It is meaningful inside the function. In other function or in main code it is unknown