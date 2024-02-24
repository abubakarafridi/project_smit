// This is a code for a function.

// function greetUser() {
//     alert("Hello, there");
// }

// greetUser();

// One of the useful thing of the function is that in the parentheses,
// When you call a function you can pass data to the function.
// instead of writing greetUser(); you write
// greetUser("hello, there");

// Now you can call a function and pass it data.
// The data you are passing is called an argument.

// Function is no longer hard-wired, it will display the message you passed as argument.

// From one-job robot to programmable you have to set it up.

// function greetUser(greeting) {
//     alert(greeting);
// }

// greetUser("hello, there");

// argument are the the calling code in greetUser which is hello, there.
// Parameter are the the Function statement parentheses in greetUser which is greeting.
// You don't have to declare variable in parameter in function, the declaration is implicit.

// "Hello, there" is the data that is passed to the function
// parameter in function definition catches the data that is passed
// "Hello, there" is assigned to greeting in the function
// The vaiable greeting is specified in the alert to display message.

// In the following code I declare a variable greeting and assign it "Hello, there"
// rather then using string I use the variable as argument

// function greetUser(greeting) {
//     alert(greeting);
// }

// let greeting = "Hello, there";
// greetUser(greeting);

// In the code above the name of parameter and argument is same but not have anything in common
// names are upto you as long as you follow variable names

// No matter what the argument name is, it is accepted by parameter.
// No matter what the parameter name is, it is accepted by argument.
// variable whatever is the argument. The parameter greeting doesn't match the name, but still catches the value.

// function greetUser(greeting) {
//     alert(greeting);
// }

// let whatever = "Hello, there";
// greetUser(whatever);

// Argument and parameter don't match.The parameter still catches the argument, the string "Hello, there".

// A number represented by a variable can be an argument.

// let almostAMIL =  999999;
// showBigNum(almostAMIL);

// you can also use it this way

// showBigNum(999999);

// You can pass any number of arguments separated by commas to a function.
// Function has the same number of parameters separated by commas.
// variable as arguments, their name doesn't have to match with those of parameters.
// Javascript matches them by there order
// Javascript first argument in the list matches up with the first parameter in the list so on and so forth.

// In the following code passing a variable, string, and a number to the function.

// function showMessage(m, string, num) {
//     alert(m + string + num)
// }

// let month = "March";
// showMessage(month, "'s winner number is ", 23);

// argumetn month is passed to parameter m, string litral is passed to parameter string, 23 is passed to parameter num

// function showMessage(m, string, num) {
//     alert(m + string + num)
// }

// let month = "March";
// showMessage("'s winner number is ",month, 23);

// I want to say is that order doesn't matter
// If you want that you dont want to pass an argument that ok