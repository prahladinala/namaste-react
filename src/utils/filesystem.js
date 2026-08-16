const fs = require("fs-extra");
const path = require("path");

const fsUtils = {
  copyTemplate: async (source, destination) => {
    await fs.copy(source, destination);
  },

  readJson: async (filePath) => {
    return await fs.readJson(filePath);
  },

  writeJson: async (filePath, data) => {
    await fs.writeJson(filePath, data, { spaces: 2 });
  },

  readFile: async (filePath) => {
    return await fs.readFile(filePath, "utf-8");
  },

  writeFile: async (filePath, content) => {
    await fs.outputFile(filePath, content);
  },

  fileExists: async (filePath) => {
    return await fs.pathExists(filePath);
  },

  ensureDir: async (dirPath) => {
    await fs.ensureDir(dirPath);
  },

  remove: async (targetPath) => {
    await fs.remove(targetPath);
  }
};

module.exports = fsUtils;
