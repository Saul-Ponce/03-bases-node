var colors = require("colors");

colors.setTheme({
  title: ["bold", "brightWhite"],
  decoration: ["rainbow", "bold"],
  linedecoration1: "brightYellow",
  linedecoration2: "brightCyan",
  operator: "brightBlue",
  info: "brightGreen",
  error: ["brightRed", "italic"],
});

const themeConsole = (msj, type) => {
  switch (type) {
    case "title":
      console.log(msj.title);
      break;
    case "decoration":
      console.log(msj.decoration);
      break;
    case "info":
      console.log(msj.info);
      break;
    case "error":
      console.log(msj.error);
      break;

    default:
      console.log(msj);
      break;
  }
};

module.exports = themeConsole;
