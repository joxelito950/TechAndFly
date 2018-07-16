const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const generator = require("./lib/generatorComponet.js");

const componentPath = path.resolve(__dirname, "../src/components/");

module.exports = {
  init: () => {
    console.log(chalk.gray("El componente va ha estar creado en "+componentPath));
    console.log("");
  },
  generator: args => generator(args, componentPath),
  questions: [
    {
      name: "name",
      message: "Nombre del componente (Camelcase): ",
      validate: name => {
        if (!name) {
          return chalk.red("No puede estar vacio");
        }
        if (!name.match(/^[A-Z]/)) {
          return chalk.red(
            "Debe iniciar con  " + chalk.inverse("C") + chalk.red("Camelcase")
          );
        }
        let newComponentPath = path.resolve(componentPath, name);
        if (fs.existsSync(newComponentPath)) {
          return chalk.red(
            "Component " +chalk.bold(name) +" ya existe (" +newComponentPath +")"
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
    }
  ]
};
