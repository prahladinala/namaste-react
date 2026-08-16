const { exec } = require("child_process");
const util = require("util");
const execPromise = util.promisify(exec);

const packageManager = {
  detect: () => {
    // Basic detection based on environment or fallback to npm
    // A robust version would check package-lock.json, yarn.lock, pnpm-lock.yaml etc.
    const userAgent = process.env.npm_config_user_agent;
    if (userAgent) {
      if (userAgent.startsWith("yarn")) return "yarn";
      if (userAgent.startsWith("pnpm")) return "pnpm";
    }
    return "npm";
  },

  install: async (cwd, pm = "npm") => {
    const installCmd = pm === "yarn" ? "yarn install" : `${pm} install`;
    await execPromise(installCmd, { cwd });
  }
};

module.exports = packageManager;
