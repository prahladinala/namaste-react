# Namaste React 👋

Namaste React is a powerful tool designed to kickstart your React projects with ease! 🚀 This package sets up a React project template using Parcel, offering a clean and efficient starting point for your web applications. Available on [npm](https://www.npmjs.com/package/namaste-react)! 🌟

## 🚀 Getting Started

To create a new React project using Namaste React, follow these simple steps:

1. **Install the Package:**

   ```bash
   npx namaste-react my-new-project
   ```

   Replace `my-new-project` with your desired project name.

2. **Navigate to Your Project Directory:**

   ```bash
   cd my-new-project
   ```

3. **Start the Development Server:**

```bash
  npm start
```

Visit [http://localhost:1234](http://localhost:1234) in your browser to see your new React app in action!

4. **Build for Production:**

```bash
npm run build
```

## 🛠️ Tech Stack

- `React`: A JavaScript library for building user interfaces.
- `Parcel`: A fast, zero-configuration web application bundler.
- `CSS`: Default CSS for basic styling.

## 📁 Project Structure

Here’s a brief overview of the project structure:

```bash
my-new-project
├── src
│   ├── index.html         # Main HTML file
│   ├── index.js           # React entry point
│   └── styles.css         # Default CSS styles
├── .gitignore              # Git ignore file
├── package.json           # Project metadata and dependencies
└── README.md              # This README file

```

## 🧩 Example

Here’s a quick example of a simple React component included in the template:

```js
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => (
  <div>
    <h1>Hello, Namaste React! 🙌</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

## 💡 Features

- `Zero Configuration`: Start coding right away with Parcel’s zero-configuration setup.
- `React Ready`: Pre-configured with React and ReactDOM.
- `Clean Slate`: A minimal setup with default CSS to get you started quickly.

## 📚 Documentation

For more details, check out the [Namaste React npm package](https://www.npmjs.com/package/namaste-react) and the official [Parcel documentation](https://parceljs.org/).

## 🤝 Contributing

Contributions are welcome! If you find a bug or have suggestions for improvements, please open an issue or submit a pull request.

## 📧 Contact

Feel free to reach out if you have any questions or need help:

- Author: [Prahlad Inala](https://beta.prahladinala.in/)
- GitHub: [@prahladinala](https://github.com/prahladinala)

Happy coding! 🎉
