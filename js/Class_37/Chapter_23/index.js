// email validation (without using indexof())
// const userEmail = prompt("Please enter you email address");
// let isValid = false;

// for(let charIndex = 0; charIndex < userEmail.length; charIndex++) {
//     if(userEmail[charIndex] === "@") {
//         isValid = true;
//         break;
//     }
// }

// if(isValid) {
//     console.log("Valid email address");
// } else {
//     console.log("Invalid email address");
// }

// const email = "abubakarafridi407@gmail.com";

// console.log(email.indexOf("@"));

// console.log(email.indexOf("@gmail.com"));

// apko -1 deta ha agr string mojud na ho
// console.log(email.indexOf("z"));

// we can use simple arrays as well
// const mohalla = ["ali", "ahmad", "akram", "aslam", "ajmal"];
// console.log(mohalla.indexOf("ajmal"));

// lastIndexOf

// const email = "qazisahb@gmail.com";
// console.log(email.lastIndexOf("m"));

// email validation (using indexof())

// const email = prompt("Please enter your email address");

// if(email.indexOf("@") !== -1) {
//     console.log("Valid email address");
// } else {
//     console.log("Invalid email address");
// }