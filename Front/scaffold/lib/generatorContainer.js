const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const generatorEvents = require("./generatorEvent");

const eventPath = path.resolve(__dirname, "../../src/events/");


module.exports = (args, containerPath) => {
  return new Promise((resolve, reject) => {
    let newContainerPath = path.resolve(containerPath, args.name);

    console.log("");
    console.log(
      chalk.green("Creando contenedor ") +
        chalk.yellow.bold(args.name) +
        chalk.green(" en ") +
        chalk.yellow(newContainerPath)
    );

    makeFolder(newContainerPath)
      .then(() => {
        return writeTemplates(newContainerPath, args);
      })
      .then(() => {
        resolve(args);
      })
      .catch(e => {
        reject(e);
      });
  });
};

const makeFolder = newContainerPath => {
  return new Promise((resolve, reject) => {
    fs.mkdir(newContainerPath, () => {
      fs.mkdir(newContainerPath+"/test", resolve);
    });
  });
};

const writeTemplates = (newContainerPath, args) => {
  return new Promise((resolve, reject) => {
    console.log(chalk.grey(" - Escribiendo Templates..."));

    let files = [];

    switch (args.complement) {
      case "Con-Redux": {
        files.push({ in: "testReducer.js", out: "test/reducer.test.js" });
        files.push({ in: "testActions.js", out: "test/actions.test.js" });        
        
        files.push({ in: "reducer.js", out: "reducer.js" });
        files.push({ in: "actions.js", out: "actions.js" });
        files.push({ in: "actionType.js", out: "actionType.js" });
        if (args.stateless) {
          files.push({ in: "statelessConnect.js", out: "index.js" });
        } else {
          files.push({ in: "statefulConnect.js", out: "index.js" });
        }
        break;
      }

      case "Con-Redux-Form + Event": {
        files.push({ in: "testActionsForm.js", out: "test/actions.test.js" });
        files.push({ in: "testComponentForm.js", out: "test/index.test.js" });     
        files.push({ in: "testValidateForm.js", out: "test/validate.test.js" });        
        
        files.push({ in: "validateForm.js", out: "validate.js" });        
        files.push({ in: "actionsForm.js", out: "actions.js" });
        files.push({ in: "actionTypeForm.js", out: "actionType.js" });

        if (args.stateless) {
          files.push({ in: "statelessConnectForm.js", out: "index.js" });
        } else {
          files.push({ in: "statefulConnectForm.js", out: "index.js" });
        } 

        generatorEvents(args, eventPath);
        break;
      }

      case "Con-Redux-Form": {
        files.push({ in: "testActionsForm.js", out: "test/actions.test.js" });
        files.push({ in: "testComponentForm.js", out: "test/index.test.js" });     
        files.push({ in: "testValidateForm.js", out: "test/validate.test.js" });        
        
        files.push({ in: "validateForm.js", out: "validate.js" });        
        files.push({ in: "actionsForm.js", out: "actions.js" });
        files.push({ in: "actionTypeForm.js", out: "actionType.js" });

        if (args.stateless) {
          files.push({ in: "statelessConnectForm.js", out: "index.js" });
        } else {
          files.push({ in: "statefulConnectForm.js", out: "index.js" });
        } 
        break;       
      }

    }

    let promises = [];

    files.forEach(file => {
      promises.push(
        new Promise((resolve, reject) => {
          let err = false;
          let read = fs.createReadStream(
            path.resolve(__dirname, "../templates", file.in)
          );
          let write = fs.createWriteStream(
            path.resolve(newContainerPath, file.out)
          );
          let rejectCleanup = e => {
            err = true;
            read.destroy();
            write.end();
            reject(e);
          };
          read.on("error", rejectCleanup);
          write.on("error", rejectCleanup);

          write.on("open", () => {
            read.on("data", chunk => {
              const content = chunk.toString();
              write.write(
                content
                  .replace(new RegExp("{{ComponentName}}", "g"), args.name)
                  .replace(
                    new RegExp("{{Date}}", "g"),
                    new Date().toISOString().slice(0, 10).toString()
                  )
                  .replace(
                    new RegExp("{{Author}}", "g"),
                    require("os").userInfo().username
                  )
              );
            });
          });

          read.on("end", () => {
            if (!err) {
              resolve();
            }
          });
        })
      );
    });

    Promise.all(promises)
      .then(() => {
        resolve();
      })
      .catch(e => {
        reject(e);
      });
  });
};
