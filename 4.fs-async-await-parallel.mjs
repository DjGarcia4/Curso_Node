// const fs = require("node:fs/promises");
import { readFile } from "node:fs/promises";
Promise.all([
  readFile("./texto.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text, text2]) => {
  console.log("Primer Texto:", text);
  console.log("Segundo Texto:", text2);
});

console.log("_____________________________________");
