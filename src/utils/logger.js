const pc = require("picocolors");
const ora = require("ora");

const logger = {
  info: (msg) => console.log(pc.blue("ℹ") + " " + msg),
  success: (msg) => console.log(pc.green("✔") + " " + msg),
  warning: (msg) => console.log(pc.yellow("⚠") + " " + msg),
  error: (msg) => console.error(pc.red("✖") + " " + msg),
  step: (msg) => console.log("\n" + pc.cyan("→") + " " + pc.bold(msg)),
  
  spinner: (text) => {
    return ora({
      text,
      color: "cyan",
    });
  },

  blank: () => console.log(""),
};

module.exports = logger;
