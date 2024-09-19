// Reading file syncronouns
// import { readFileSync } from "node:fs"

// try {
//     const synFile = readFileSync("to-read-file.txt", 'utf8');
//     console.log("The file is readed successfully", synFile);
// } catch (err) {
//     console.log("We have an error", err);
// }

// Reading file asyncronouns
// import { readFile } from "node:fs/promises"

// try {
//     const asynFile = await readFile("to-read-file.txt", 'utf8');
//     console.log("The file is readed successfully", asynFile);
// } catch (err) {
//     console.log("We have an error", err);
// }

// write file syncronouns
// import { writeFileSync } from "node:fs"

// try {
//     const data = "hi what are you doing"
//     const synFile = writeFileSync("to-write-file.txt", data, 'utf8');
//     console.log("The file is readed successfully", synFile);
// } catch (err) {
//     console.log("We have an error", err);
// }

// write file asyncronouns
// import {writeFile} from "node:fs/promises"

// const writeFileSync = async () => {
//   try {
//     const content = 'This file is written with async write';
//     await writeFile('to-write-file-async.txt', content);
//     console.log('The file is written succesfully');
//   } catch (error) {
//     console.log(error);
//   }
// };

// writeFileSync();

// append file asyncronouns
// import {appendFileSync} from "node:fs"

// const appendSync = async () => {
//     try {
//         const content = "This is the text written after append";
//         await appendFileSync("to-append-file-sync.txt", content);
//         console.log("The file is is appended successfully");
//     } catch (error) {
//         console.log(error);
//     }
// }

// appendSync();


// delete file
import {unlink} from "node:fs/promises"

const deleteFile = async () => {
    try {
        await unlink("to-delete-file.txt");
        console.log("The file is is deleted successfully");
    } catch (error) {
        console.log(error);
    }
}

deleteFile();