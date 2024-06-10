// Arrow Function
// const hello = () => {
//     console.log("hello world");
// }

// hello();

// const hello = () => "Hello world";

// "this" keyword in js how it works differently in normal and arrow function
// function HandleClick() {
//     this.innerText = "Clicked!";
//     this.style.backgroundColor = "yellow";
//   }
  
// document.getElementById('myButton').onclick = HandleClick;
  
// const handleClick = () => {
//   console.log(this); // `this` is the window object
  // Trying to use `this.innerText` or `this.style.backgroundColor` will not work as expected
// }

// document.getElementById('myButton').onclick = handleClick;

// console.log(hello());

// Normal function

// function hello() {
//     console.log("hello world");
// }

// hello();

// let hello = function() {
//     console.log("Hello world");
// }

// hello();

// SETS in JS
const letters = new Set(["a", "b", "c"]);

let text = "";
for (const x of letters) {
    text += x;
}

console.log(text);

