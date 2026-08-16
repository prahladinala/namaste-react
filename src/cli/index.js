const { program } = require("commander");
const createCommand = require("./commands/create");
const doctorCommand = require("./commands/doctor");

const runCli = () => {
  program
    .name("namaste-react")
    .description("A modern, configurable, production-ready React project generator CLI")
    .version("2.0.0");

  program
    .argument("[project-name]", "Name of the project")
    .option("-p, --preset <preset>", "Use a predefined preset (e.g., minimal, production, react-typescript)")
    .option("--typescript", "Use TypeScript")
    .option("--javascript", "Use JavaScript")
    .option("--tailwind", "Use Tailwind CSS")
    .option("--css", "Use standard CSS")
    .option("--scss", "Use SCSS")
    .option("--parcel", "Use Parcel bundler")
    .option("--vite", "Use Vite bundler")
    .option("--router", "Add React Router")
    .option("--zustand", "Use Zustand for state management")
    .option("--redux", "Use Redux Toolkit for state management")
    .option("--axios", "Use Axios for API client")
    .option("--eslint", "Add ESLint + Prettier")
    .option("--vitest", "Add Vitest")
    .option("-y, --yes", "Skip prompts and use default/preset options")
    .action(async (projectName, options) => {
      await createCommand(projectName, options);
    });

  program
    .command("create <project-name>")
    .description("Create a new React application (alias for default command)")
    .action(async (projectName, options) => {
      await createCommand(projectName, program.opts());
    });

  program
    .command("doctor")
    .description("Check your environment for Namaste React dependencies")
    .action(doctorCommand);

  program.parse(process.argv);
};

module.exports = { runCli };
