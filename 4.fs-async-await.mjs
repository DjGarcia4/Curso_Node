// const fs = require("node:fs/promises");
import { readFile } from "node:fs/promises";

console.log("_____________________________________");
console.log("Leyendo el primer archivo...");
const text = await readFile("./texto.txt", "utf-8").then((text) => {
  console.log("Primer texto:", text);
});
console.log("Haciendo cosas...");

console.log("_____________________________________");
console.log("Leyendo el segundo archivo...");
const text2 = await readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log("Segundo texto: ", text);
});
console.log("_____________________________________");
