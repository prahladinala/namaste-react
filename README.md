<div align="center">
  
# Namaste React 🚀

**A modern, configurable, and production-ready React project scaffolding CLI.**

[![npm version](https://img.shields.io/npm/v/namaste-react.svg?style=for-the-badge&color=success)](https://www.npmjs.com/package/namaste-react)
[![npm downloads](https://img.shields.io/npm/dt/namaste-react.svg?style=for-the-badge&color=blue)](https://www.npmjs.com/package/namaste-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

*Stop copying boilerplate. Start building.*

</div>

---

## ✨ Features

- 🧠 **Smart Scaffolding**: Dynamically generates exactly what you need without bloat.
- ⚡ **Bundler Choice**: Choose between **Parcel** (Default) or **Vite** for blazing fast builds.
- 📜 **Language Support**: Seamless setup for both **JavaScript** and **TypeScript**.
- 🎨 **Styling**: Pre-configured **Tailwind CSS**, SCSS, or standard CSS.
- 🛣️ **Routing**: Out-of-the-box **React Router v6** configuration with basic page structures.
- 🧠 **State Management**: Integrated support for **Zustand** or **Redux Toolkit**.
- 🧹 **Code Quality**: Pre-configured **ESLint & Prettier** rules to keep your codebase clean.
- 🏎️ **Presets**: Launch fully-configured apps instantly using production-ready presets.

---

## 🚀 Quick Start

You don't need to install anything globally. Spin up a new project in seconds using `npx`:

```bash
npx namaste-react@latest my-app
```

> **Note**: This will launch an **interactive wizard** guiding you through setting up your preferred technology stack.

---

## 🎛️ Interactive Configuration

When you run `namaste-react`, you'll be prompted to tailor your project:

1. **Language**: `TypeScript` or `JavaScript`
2. **Styling**: `Tailwind CSS`, `CSS`, or `SCSS`
3. **Bundler**: `Parcel` or `Vite`
4. **Routing**: `React Router` (Yes/No)
5. **State Management**: `Zustand`, `Redux Toolkit`, `Context API`, or `None`
6. **Code Quality**: `ESLint + Prettier` (Yes/No)
7. ... and more features like Testing, API clients, and Forms!

---

## ⚡ CLI Flags (Non-Interactive Mode)

Want to skip the prompts? You can pass your choices directly as command-line arguments for CI/CD or faster scaffolding.

```bash
npx namaste-react my-app --typescript --tailwind --router --zustand --vite
```

### Supported Flags

| Flag | Description |
| :--- | :--- |
| `--typescript` | Use TypeScript as the base language |
| `--javascript` | Use JavaScript as the base language |
| `--tailwind` | Configure Tailwind CSS |
| `--css` / `--scss` | Use standard CSS or SCSS |
| `--parcel` | Use Parcel as the bundler (Default) |
| `--vite` | Use Vite as the bundler |
| `--router` | Scaffold React Router setup |
| `--zustand` | Add Zustand store configuration |
| `--redux` | Add Redux Toolkit configuration |
| `--eslint` | Setup ESLint and Prettier |
| `-y, --yes` | Skip all prompts and use defaults |

---

## 📦 Presets

For an even faster experience, use **Presets**. Presets bypass the configuration wizard and generate a specific stack instantly.

```bash
npx namaste-react my-app --preset production
```

### Available Presets:

- 🟢 **`minimal`**: The bare minimum. React + Parcel + JS + CSS.
- 🔵 **`react-tailwind`**: Basic React + Tailwind CSS setup.
- 🟡 **`react-typescript`**: Basic React + TypeScript setup.
- 🟣 **`production`**: Fully loaded! TS, Tailwind, Router, Zustand, Axios, Zod, React Hook Form, ESLint, Prettier, and Vitest.
- 🟠 **`dashboard`**: A production-ready dashboard stack utilizing Vite.

---

## 🩺 Namaste React Doctor

Having issues generating your project? Verify that your local development environment has all the necessary dependencies installed (Node.js, npm, Git).

```bash
npx namaste-react doctor
```
*Doctor will analyze your system and provide actionable feedback if anything is missing.*

---

## 📁 Generated Project Structure

Depending on your choices, the generated project will have a beautifully clean, scalable structure:

```text
my-app/
├── src/
│   ├── pages/         # (If React Router is enabled)
│   ├── store/         # (If Zustand/Redux is enabled)
│   ├── App.tsx        
│   ├── index.tsx      
│   └── index.css      # (If Tailwind is enabled)
├── package.json
├── tsconfig.json      # (If TypeScript is enabled)
├── tailwind.config.js # (If Tailwind is enabled)
├── .eslintrc.json     # (If ESLint is enabled)
└── .prettierrc        # (If Prettier is enabled)
```

---

## 🛠️ Development & Contributing

Want to help improve `namaste-react`? We'd love your contributions!

1. Clone the repository:
   ```bash
   git clone https://github.com/prahladinala/namaste-react.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Test the CLI locally:
   ```bash
   node bin/cli.js test-app --preset minimal
   ```

### Architecture Details
The CLI is built with a highly extensible modular architecture:
- **`src/cli/`**: Handles user prompts (`inquirer`), command parsing (`commander`), and environment checks.
- **`src/generators/`**: Contains the core engine and feature-specific generators (`router.js`, `state.js`, `tailwind.js`, etc.).
- **`src/templates/`**: Contains minimal base templates that are dynamically enriched by the generators.
- **`src/config/`**: Defines configuration schemas and presets.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<div align="center">
  <i>Built with ❤️ by <a href="https://github.com/prahladinala">Prahlad Inala</a> and contributors.</i>
</div>
