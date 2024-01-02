// CHAPTER-14: IF STATEMENTS NESTED

// User Authentication
// const userName = prompt("please enter your username");
// let password = "";

// if (userName === "admin") {
//     password = prompt("please enter your password");
//     if (password === "secret") {
//         document.write("login successfull. Welcome, Admin");
//     } else {
//         document.write("Incorrect password. please try again.");
//     }
// } else {
//     document.write("User not found. Please check your username");
// }

const age = +prompt("Enter your age");
const isStudent = +prompt("are you a student \n0.NO\n1.YES");

if(age < 12) {
    document.write("Child Ticket: $5");
} else {
    if(age >= 12 && age < 18 && isStudent) {
        document.write("Student Ticket: $10");
    } else {
        document.write("Adult Ticket: $15");
    }
}