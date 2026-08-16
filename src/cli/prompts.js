const { select, confirm, input } = require("@inquirer/prompts");

const prompts = {
  askProjectName: async (defaultName) => {
    return await input({
      message: "📦 Project name:",
      default: defaultName,
    });
  },

  askLanguage: async () => {
    return await select({
      message: "📜 Select language:",
      choices: [
        { name: "TypeScript", value: "typescript" },
        { name: "JavaScript", value: "javascript" },
      ],
      default: "typescript",
    });
  },

  askStyling: async () => {
    return await select({
      message: "🎨 Select styling:",
      choices: [
        { name: "Tailwind CSS", value: "tailwind" },
        { name: "CSS", value: "css" },
        { name: "SCSS", value: "scss" },
      ],
      default: "tailwind",
    });
  },

  askBundler: async () => {
    return await select({
      message: "📦 Select bundler:",
      choices: [
        { name: "Parcel", value: "parcel" },
        { name: "Vite", value: "vite" },
      ],
      default: "parcel",
    });
  },

  askRouter: async () => {
    return await confirm({
      message: "🛣️ Add React Router?",
      default: true,
    });
  },

  askStateManagement: async () => {
    return await select({
      message: "🧠 State management:",
      choices: [
        { name: "None", value: "none" },
        { name: "Zustand", value: "zustand" },
        { name: "Redux Toolkit", value: "redux" },
        { name: "Context API", value: "context" },
      ],
      default: "none",
    });
  },

  askApiClient: async () => {
    return await select({
      message: "🌐 API client:",
      choices: [
        { name: "Fetch", value: "fetch" },
        { name: "Axios", value: "axios" },
        { name: "None", value: "none" },
      ],
      default: "fetch",
    });
  },

  askForms: async () => {
    return await select({
      message: "📝 Forms:",
      choices: [
        { name: "None", value: "none" },
        { name: "React Hook Form", value: "react-hook-form" },
      ],
      default: "none",
    });
  },

  askValidation: async () => {
    return await select({
      message: "✅ Validation:",
      choices: [
        { name: "None", value: "none" },
        { name: "Zod", value: "zod" },
        { name: "Yup", value: "yup" },
      ],
      default: "none",
    });
  },

  askUI: async () => {
    return await select({
      message: "🧩 UI Components:",
      choices: [
        { name: "Basic", value: "basic" },
        { name: "shadcn-style", value: "shadcn" },
        { name: "None", value: "none" },
      ],
      default: "basic",
    });
  },

  askIcons: async () => {
    return await select({
      message: "🖼️ Icons:",
      choices: [
        { name: "Lucide", value: "lucide" },
        { name: "None", value: "none" },
      ],
      default: "lucide",
    });
  },

  askTesting: async () => {
    return await select({
      message: "🧪 Testing:",
      choices: [
        { name: "None", value: "none" },
        { name: "Vitest + React Testing Library", value: "vitest" },
      ],
      default: "none",
    });
  },

  askEslintPrettier: async () => {
    return await confirm({
      message: "🧹 Add ESLint + Prettier?",
      default: true,
    });
  },

  askGit: async () => {
    return await confirm({
      message: "🔧 Initialize Git?",
      default: true,
    });
  },

  askAll: async (projectName) => {
    const name = await prompts.askProjectName(projectName);
    const language = await prompts.askLanguage();
    const styling = await prompts.askStyling();
    const bundler = await prompts.askBundler();
    const router = await prompts.askRouter();
    const state = await prompts.askStateManagement();
    const api = await prompts.askApiClient();
    const forms = await prompts.askForms();
    const validation = await prompts.askValidation();
    const ui = await prompts.askUI();
    const icons = await prompts.askIcons();
    const testing = await prompts.askTesting();
    const eslintPrettier = await prompts.askEslintPrettier();
    const git = await prompts.askGit();

    return {
      name,
      language,
      styling,
      bundler,
      router,
      state,
      api,
      forms,
      validation,
      ui,
      icons,
      testing,
      eslintPrettier,
      git
    };
  }
};

module.exports = prompts;
