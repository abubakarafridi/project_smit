// var spec = prompt("Your species?");

// As you might expect, you can assign the strings to variables, then specify the variables
// instead of strings inside the parentheses.
// let question = "Your species?";
// let defaultAnswer = "human";
// let spec = prompt(question, defaultAnswer);

// The user's response is a text string. Even if the response is a number, it comes back as a
// string. For example, consider this code.

let numberOfCats = +prompt("How many cats?");
let tooManyCats = numberOfCats + 1;

alert(tooManyCats);
