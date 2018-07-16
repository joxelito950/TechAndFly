const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

module.exports = (args, componentPath) => {
  return new Promise((resolve, reject) => {
    let newComponentPath = path.resolve(componentPath, args.name);

    console.log("");
    console.log(
      chalk.green("Creando componente ") +
        chalk.yellow.bold(args.name) +
        chalk.green(" at ") +
        chalk.yellow(newComponentPath)
    );

    makeFolder(newComponentPath)
      .then(() => {
        return writeTemplates(newComponentPath, args);
      })
      .then(() => {
        resolve(args);
      })
      .catch(e => {
        reject(e);
      });
  });
};

const makeFolder = newComponentPath => {
  return new Promise((resolve, reject) => {
    fs.mkdir(newComponentPath, () => {
      fs.mkdir(newComponentPath+"/test", resolve);
    });
  });
};

const writeTemplates = (newComponentPath, args) => {
  return new Promise((resolve, reject) => {
    console.log(chalk.grey(" - Escribiendo Templates..."));

    let files = [];
    files.push({ in: "testComponent.js", out: "test/index.test.js" });
    
    if (args.stateless) {
      files.push({ in: "statelessComponent.js", out: "index.js" });
    } else {
      files.push({ in: "statefulComponent.js", out: "index.js" });
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
            path.resolve(newComponentPath, file.out)
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
