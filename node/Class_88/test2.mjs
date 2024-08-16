// This is how to export a single function in esm for this the file extension should be .mjs
// export function tellTime () {
//     let never = new Date;
//     let hour = never.getHours();
//     let minutes = never.getMinutes();

//     console.log(`The time is ${hour}:${minutes}`);
// }

function tellTime () {
    let never = new Date;
    let hour = never.getHours();
    let minutes = never.getMinutes();

    console.log(`The time is ${hour}:${minutes}`);
}

function sayHi () {
    console.log("hiii");
}

// This is the way how to export a single function in common js for this the file extension should be .js
// module.exports = tellTime;

// This is the way how to export multiple function in common js for this the file extension should be .js
// module.exports = {tellTime, sayHi};

// This is the way how to export multiple function in esm for this the file extension should be .mjs
export {tellTime, sayHi} 