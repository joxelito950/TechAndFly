const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

module.exports = (args, eventPath) => {
  let newEventPath = path.resolve(eventPath, args.name);

  console.log("");
  console.log(
    chalk.green("Creando evento ") +
      chalk.yellow.bold(args.name) +
      chalk.green(" en ") +
      chalk.yellow(newEventPath+"Event")
  );
  return writeTemplates(eventPath, args);
};

const writeTemplates = (newEventPath, args) => {
  return new Promise((resolve, reject) => {
    console.log(chalk.grey(" - Escribiendo Templates..."));

    let files = [];
    files.push({ in: "testEvent.js", out: "test/" + args.name + "Event.test.js" });
    files.push({ in: "event.js", out: args.name + "Event.js" });

    let promises = [];

    files.forEach(file => {
      promises.push(
        new Promise((resolve, reject) => {
          let err = false;
          let read = fs.createReadStream(
            path.resolve(__dirname, "../templates", file.in)
          );
          let write = fs.createWriteStream(
            path.resolve(newEventPath, file.out)
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
        resolve(args);
      })
      .catch(e => {
        reject(e);
      });
  });
};
