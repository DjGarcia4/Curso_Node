const { readFile } = require("node:fs/promises");
(async function () {
  console.log("_____________________________________");
  console.log("Leyendo el primer archivo...");
  const text = readFile("./texto.txt", "utf-8").then((text) => {
    console.log("Primer texto:", text);
  });
  console.log("Haciendo cosas...");

  console.log("_____________________________________");
  console.log("Leyendo el segundo archivo...");
  const text2 = readFile("./archivo2.txt", "utf-8").then((text) => {
    console.log("Segundo texto: ", text);
  });
  console.log("_____________________________________");
})();
