const fs = require("fs");
const themeConsole = require("../themes/console-themes");

const crearArchivo = async (multiplicando = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";
    const nombreArchivo = `tabla-${multiplicando}.txt`;

    for (let multiplicador = 1; multiplicador <= hasta; multiplicador++) {
      salida += `${multiplicando} x ${multiplicador} = ${
        multiplicando * multiplicador
      }\n`;
      if (multiplicador % 2 === 0) {
        consola += `${multiplicando} ${"x".operator} ${multiplicador} ${
          "=".operator
        } ${multiplicando * multiplicador}\n`.linedecoration1;
      } else {
        consola += `${multiplicando} ${"x".operator} ${multiplicador} ${
          "=".operator
        } ${multiplicando * multiplicador}\n`.linedecoration2;
      }
    }
    if (listar) {
      themeConsole("================", "decoration");
      themeConsole(`  tabla del ${multiplicando}  `, "title");
      themeConsole("================", "decoration");
      themeConsole(consola);
    }

    fs.writeFileSync(`./salida/${nombreArchivo}`, salida);
    return nombreArchivo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
