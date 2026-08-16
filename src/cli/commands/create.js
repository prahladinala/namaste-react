const path = require("path");
const logger = require("../../utils/logger");
const validation = require("../../utils/validation");
const fsUtils = require("../../utils/filesystem");
const prompts = require("../prompts");
const presets = require("../../config/presets");
const engine = require("../../generators/engine");

const createCommand = async (projectName, options) => {
  logger.blank();
  logger.info("Namaste React 🚀");
  logger.blank();

  let finalProjectName = projectName;

  // 1. Resolve Project Name
  if (!finalProjectName) {
    if (options.yes || options.preset) {
      finalProjectName = "my-react-app";
    } else {
      finalProjectName = await prompts.askProjectName("my-react-app");
    }
  }

  const safeName = validation.getSafeProjectName(finalProjectName);
  
  if (!validation.isValidProjectName(safeName)) {
    logger.error(`Invalid project name: ${safeName}`);
    process.exit(1);
  }

  const targetPath = path.resolve(process.cwd(), safeName);

  if (await fsUtils.fileExists(targetPath)) {
    logger.error(`Directory ${safeName} already exists. Please choose a different name or delete the directory.`);
    process.exit(1);
  }

  // 2. Resolve Configuration
  let config = {};

  if (options.preset) {
    if (presets[options.preset]) {
      config = { ...presets[options.preset] };
      logger.info(`Using preset: ${options.preset}`);
    } else {
      logger.error(`Preset "${options.preset}" not found. Available presets: ${Object.keys(presets).join(", ")}`);
      process.exit(1);
    }
  } else if (options.yes) {
    logger.info("Using default configuration.");
    config = { ...presets.minimal };
  } else {
    // Interactive mode
    config = await prompts.askAll(safeName);
  }

  // Attach project name and path to config
  config.projectName = safeName;
  config.targetPath = targetPath;

  // 3. Generate Project
  try {
    await engine.generate(config);
    
    logger.blank();
    logger.success("Success! 🎉");
    logger.blank();
    logger.info("Next steps:");
    logger.step(`cd ${safeName}`);
    logger.step("npm install"); // We might install for them, but usually it's good to show
    logger.step(config.bundler === "vite" ? "npm run dev" : "npm start");
    logger.blank();

  } catch (error) {
    logger.error("An error occurred during project generation:");
    console.error(error);
    process.exit(1);
  }
};

module.exports = createCommand;
