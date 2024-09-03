#!/usr/bin/env node

const { select } = require("@inquirer/prompts");
const fs = require("fs-extra");
const path = require("path");
const { program } = require("commander");

program
  .version("1.0.3")
  .description(
    "A custom tool to create a React project with a specific structure"
  )
  .argument("<project-name>", "name of the project")
  .action(async (projectName) => {
    const projectPath = path.resolve(process.cwd(), projectName);

    // Check if the directory already exists
    if (fs.existsSync(projectPath)) {
      console.error(`❌ Directory ${projectName} already exists.`);
      process.exit(1);
    }

    try {
      // Prompt user for options
      const language = await select({
        message: "📜 Choose your JavaScript language:",
        choices: [
          { name: "JavaScript", value: "javascript" },
          { name: "TypeScript", value: "typescript" },
        ],
        default: "javascript",
      });

      const css = await select({
        message: "🎨 Choose your CSS framework:",
        choices: [
          { name: "Default CSS", value: "default" },
          { name: "Tailwind CSS", value: "tailwind" },
        ],
        default: "default",
      });

      // Create the project directory
      fs.mkdirSync(projectPath);

      // Determine the path to the template based on user input
      const templateDir = path.resolve(
        __dirname,
        "../templates",
        language,
        css
      );

      // Check if the template directory exists
      if (!fs.existsSync(templateDir)) {
        console.error(`❌ Template not found for ${language} and ${css}.`);
        process.exit(1);
      }

      // Copy the template files to the new project directory
      fs.copySync(templateDir, projectPath);

      console.log(`✅ Project ${projectName} created successfully!`);
      console.log(
        "➡️ Navigate to the project directory and run `npm install` to get started."
      );

      // Optional: Initialize a Git repository in the new project directory
      console.log("🔧 Initializing Git repository...");
      require("child_process").execSync("git init", { cwd: projectPath });
      console.log("✨ Git repository initialized.");
    } catch (error) {
      console.error("❌ An error occurred:", error);
      process.exit(1);
    }
  });

program.parse(process.argv);
