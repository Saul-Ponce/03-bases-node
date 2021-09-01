const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const themeConsole = require("./themes/console-themes");
console.clear();

/*
*Forma manual de extraer parametros desde la consola 
const [, , arg3 = "base=5"] = process.argv;
const [, base = 5] = arg3.split("="); 
*/

crearArchivo(argv.base, argv.listar, argv.h)
  .then((nombreArchivo) => themeConsole(`${nombreArchivo} creado`, "info"))
  .catch((err) => themeConsole(`Error: err`, "error"));
