const path = require("path");

const validation = {
  isValidProjectName: (projectName) => {
    // Basic npm package name validation logic
    const regex = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;
    return regex.test(projectName);
  },
  
  getSafeProjectName: (projectName) => {
    return projectName
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/^[._]/, "")
      .replace(/[^a-z0-9-~]+/g, "-");
  }
};

module.exports = validation;
