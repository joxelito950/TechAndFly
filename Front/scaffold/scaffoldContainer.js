const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const generator = require("./lib/generatorContainer.js");

const containersPath = path.resolve(__dirname, "../src/containers/");

module.exports = {
  init: () => {
    console.log(chalk.gray("El contenedor va ha estar creado en "+containersPath));
    console.log("");
  },
  generator: args => generator(args, containersPath),
  questions: [
    {
      name: "name",
      message: "Nombre del contenedor (Camelcase): ",
      validate: name => {
        if (!name) {
          return chalk.red("No puede estar vacio");
        }
        if (!name.match(/^[A-Z]/)) {
          return chalk.red(
            "Debe iniciar con  " + chalk.inverse("C") + chalk.red("Camelcase")
          );
        }
        let newContainerPath = path.resolve(containersPath, name);
        if (fs.existsSync(newContainerPath)) {
          return chalk.red(
            "Contenedor " +
              chalk.bold(name) +
              " ya existe (" +
              newContainerPath +
              ")"
          );
        }
        return true;
      }
    },
    {
      name: "stateless",
      type: "confirm",
      default: true,
      message: "Componente Stateless?"
    },
    {
      name: "complement",
      type: "list",
      default: false,
      choices: ["Con-Redux", "Con-Redux-Form", "Con-Redux-Form + Event", ],
      message: "¿Cual es el complemento del contendor?"
    }
  ]
};
