const fs = require("node:fs");

console.log("_____________________________________");
console.log("Leyendo el primer archivo...");
const text = fs.readFile("./texto.txt", "utf-8", (err, text) => {
  console.log(text);
});
console.log("Haciendo cosas...");

console.log("_____________________________________");
console.log("Leyendo el segundo archivo...");
const text2 = fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log(text);
});
console.log("_____________________________________");
