// Here is the code for the checkAddress function
// function checkAddress(emailValue) {
//     if(document.getElementById(emailValue).value === "") {
//         alert("Email address required");
//     }
// }

// If there is no value the alert says email address required

// Here is the sequence
// 1. keyword document follows by
// 2. A dot follows by
// 3. the keyword getElementById follows by
// 4. parans recieving value from id follows by
// 5. another dot follows by
// 6. the keyword value

// Some coder put the value found in a separated variable

function checkAddress(emailValue) {
    let val = document.getElementById(emailValue).value;
    if (val === "") {
        alert("Email address required");
    }
}