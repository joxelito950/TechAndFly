const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const generator = require("./lib/generatorEvent.js");

const eventPath = path.resolve(__dirname, "../src/events/");

module.exports = {
  init: () => {
    console.log(chalk.gray("El evento va ha estar creado en "+eventPath));
    console.log("");
  },
  generator: args => generator(args, eventPath),
  questions: [
    {
      name: "name",
      message: "Nombre del evento (Camelcase): ",
      validate: name => {
        if (!name) {
          return chalk.red("No puede estar vacio");
        }
        if (!name.match(/^[A-Z]/)) {
          return chalk.red(
            "Debe iniciar con  " + chalk.inverse("C") + chalk.red("Camelcase")
          );
        }
        let newEventPath= path.resolve(eventPath, name);
        if (fs.existsSync(newEventPath)) {
          return chalk.red(
            "Evento " +
              chalk.bold(name) +
              " ya existe (" +
              newEventPath +
              ")"
          );
        }
        return true;
      }
    }
  ]
};
