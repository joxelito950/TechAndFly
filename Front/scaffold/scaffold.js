const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const inquirer = require("inquirer");

process.stdout.write("\x1bc"); // clear terminal

console.log(chalk.green.bold("Scaffold CLI (ARQUITECTURA TECH@SOLVE)."));
console.log(chalk.green.bold("Procesando comando..."));
console.log("");

let scaffolding = null;

const opt = process.argv[2];
switch (opt) {
  case undefined:
  case "component":
    scaffolding = require("./scaffoldComponent");
    break;
  case "container":
    scaffolding = require("./scaffoldContainer");
    break;
  case "event":
    scaffolding = require("./scaffoldEvent");
    break;
  default: {
    console.log(chalk.red("No existe una opcion adecuada para construir."));
    return;
  }
}

scaffolding.init();

inquirer
  .prompt(scaffolding.questions)
  .then(scaffolding.generator)
  .then(args => {
    console.log(
      chalk.green(
        chalk.bold("Finalizado!"),
        "Se contruyo correctamente el scaffold ",
        chalk.bold.yellow(args.name),
        ", scaffolded hecho."
      )
    );
  })
  .catch(e => {
    console.log(chalk.red("Error"), e);
  });
