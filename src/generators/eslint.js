const fsUtils = require("../utils/filesystem");
const path = require("path");

const generateEslint = async (config, targetPath, pkg) => {
  if (!config.eslintPrettier) return;

  const isTS = config.language === "typescript";

  pkg.devDependencies = {
    ...pkg.devDependencies,
    eslint: "^8.57.0",
    "eslint-plugin-react": "^7.34.2",
    "eslint-plugin-react-hooks": "^4.6.2",
    prettier: "^3.3.1"
  };

  if (isTS) {
    pkg.devDependencies = {
      ...pkg.devDependencies,
      "@typescript-eslint/eslint-plugin": "^7.12.0",
      "@typescript-eslint/parser": "^7.12.0"
    };
  }

  pkg.scripts = {
    ...pkg.scripts,
    lint: "eslint src --ext js,jsx,ts,tsx --report-unused-disable-directives --max-warnings 0",
    format: "prettier --write \"src/**/*.{js,jsx,ts,tsx,css,md}\""
  };

  const eslintrcContent = `{
  "env": { "browser": true, "es2020": true },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended"${isTS ? ',\n    "plugin:@typescript-eslint/recommended"' : ""}
  ],
  ${isTS ? '"parser": "@typescript-eslint/parser",' : ""}
  "parserOptions": { "ecmaVersion": "latest", "sourceType": "module" },
  "settings": { "react": { "version": "18.2" } },
  "plugins": ["react-refresh"],
  "rules": {
    "react-refresh/only-export-components": [
      "warn",
      { "allowConstantExport": true }
    ]
  }
}
`;

  await fsUtils.writeFile(path.resolve(targetPath, ".eslintrc.json"), eslintrcContent);

  const prettierrcContent = `{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": false,
  "trailingComma": "none",
  "jsxBracketSameLine": true
}
`;

  await fsUtils.writeFile(path.resolve(targetPath, ".prettierrc"), prettierrcContent);
};

module.exports = generateEslint;
