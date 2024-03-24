const path = require("node:path");
//Barra separadora de carpetas segun SO
// console.log(path.sep);

//Unir rutas con path.join
const filepath = path.join("content", "subfolder", "text.txt");
console.log(filepath);

const base = path.basename("/tmp/test/password.txt");
console.log(base);

const filename = path.basename("/tmp/test/password.txt", ".txt");
console.log(filename);

const extension = path.extname("/tmp/test/password.txt");
console.log(extension);
