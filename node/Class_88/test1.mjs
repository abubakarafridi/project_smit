// This is the way to use a single function in common js for this the file extension should be .js
// const tellTime = require("./test2.js")

// This is the way to use multiple function in common js for this the file extension should be .js
// const {tellTime, sayHi} = require("./test2.js")

// This is the way how to import a function in esm for this the file extension should be .mjs
// import { tellTime } from "./test2.mjs";

// This is the way how to import multiple function in esm for this the file extension should be .mjs
import { tellTime, sayHi } from "./test2.mjs";


tellTime();
sayHi();