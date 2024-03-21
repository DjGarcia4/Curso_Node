const os = require("node:os");

console.log("Informacion del sitema operativo");
console.log("-----------");
console.log("Nombre del sistema Operativo:", os.platform());
console.log("Version del sistema opetativo:", os.release());
console.log("Arquitectura del procesador: ", os.arch());
console.log("CPUs", os.cpus());
console.log("Memoria Libre:", os.freemem() / 1024 / 1024);
console.log("Memoria total:", os.totalmem());
console.log("Uptime:", os.uptime() / 60 / 60, "horas");
