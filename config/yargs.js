const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: "Es la base de la tabla de multiplicar",
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      describe: "muestra la tabla en consola",
    },
    h: {
      alias: "hasta",
      type: "number",
      default: 10,
      describe: "Es el limite de multiplicaciones que tendra la tabla",
    },
  })
  .check((argv, options) => {
    switch (true) {
      case isNaN(argv.b):
        throw "la base tiene que ser un numero >:v";
      case isNaN(argv.h):
        throw "el limite tiene que ser un numero >:v";
    }
    return true;
  }).argv;

module.exports = argv;
