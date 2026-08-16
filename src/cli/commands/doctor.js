const { exec } = require("child_process");
const util = require("util");
const execPromise = util.promisify(exec);
const logger = require("../../utils/logger");

const checkCommand = async (command, successMsg, errorMsg) => {
  try {
    const { stdout } = await execPromise(command);
    logger.success(`${successMsg} (${stdout.trim()})`);
    return true;
  } catch (err) {
    logger.error(errorMsg);
    return false;
  }
};

const doctorCommand = async () => {
  logger.blank();
  logger.info("Namaste React Doctor 🩺");
  logger.blank();

  let allGood = true;

  // Check Node.js
  const nodeValid = await checkCommand("node -v", "Node.js installed", "Node.js is not installed or accessible.");
  if (!nodeValid) allGood = false;

  // Check npm
  const npmValid = await checkCommand("npm -v", "npm installed", "npm is not installed or accessible.");
  if (!npmValid) allGood = false;

  // Check Git
  const gitValid = await checkCommand("git --version", "Git installed", "Git is not installed. Some features may not work.");
  if (!gitValid) allGood = false;

  logger.blank();
  if (allGood) {
    logger.success("Everything looks good! 🎉");
  } else {
    logger.warning("Some checks failed. Please fix the issues above before using Namaste React.");
  }
  logger.blank();
};

module.exports = doctorCommand;
