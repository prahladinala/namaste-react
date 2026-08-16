const presets = {
  minimal: {
    language: "javascript",
    styling: "css",
    bundler: "parcel",
    router: false,
    state: "none",
    api: "none",
    forms: "none",
    validation: "none",
    ui: "none",
    icons: "none",
    testing: "none",
    eslintPrettier: false,
    git: true
  },
  "react-tailwind": {
    language: "javascript",
    styling: "tailwind",
    bundler: "parcel",
    router: false,
    state: "none",
    api: "none",
    forms: "none",
    validation: "none",
    ui: "basic",
    icons: "lucide",
    testing: "none",
    eslintPrettier: true,
    git: true
  },
  "react-typescript": {
    language: "typescript",
    styling: "css",
    bundler: "parcel",
    router: false,
    state: "none",
    api: "none",
    forms: "none",
    validation: "none",
    ui: "none",
    icons: "none",
    testing: "none",
    eslintPrettier: true,
    git: true
  },
  production: {
    language: "typescript",
    styling: "tailwind",
    bundler: "parcel",
    router: true,
    state: "zustand",
    api: "axios",
    forms: "react-hook-form",
    validation: "zod",
    ui: "shadcn",
    icons: "lucide",
    testing: "vitest",
    eslintPrettier: true,
    git: true
  },
  dashboard: {
    language: "typescript",
    styling: "tailwind",
    bundler: "vite",
    router: true,
    state: "zustand",
    api: "axios",
    forms: "react-hook-form",
    validation: "zod",
    ui: "shadcn",
    icons: "lucide",
    testing: "vitest",
    eslintPrettier: true,
    git: true
  }
};

module.exports = presets;
