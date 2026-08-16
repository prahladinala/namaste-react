const fsUtils = require("../utils/filesystem");
const path = require("path");

const generateTailwind = async (config, targetPath, pkg) => {
  if (config.styling !== "tailwind") return;

  // Add dependencies
  pkg.devDependencies = {
    ...pkg.devDependencies,
    tailwindcss: "^3.4.4",
    postcss: "^8.4.38",
    autoprefixer: "^10.4.19"
  };

  // Check if we are using Vite or Parcel for tailwind config extension
  // Both support postcss and tailwindcss naturally.
  
  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;

  const postcssConfig = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
`;

  const cssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;
`;

  await fsUtils.writeFile(path.resolve(targetPath, "tailwind.config.js"), tailwindConfig);
  
  if (config.bundler === "vite") {
    await fsUtils.writeFile(path.resolve(targetPath, "postcss.config.js"), postcssConfig);
  } else {
    // Parcel supports .postcssrc
    const parcelPostcss = `{
  "plugins": {
    "tailwindcss": {}
  }
}`;
    await fsUtils.writeFile(path.resolve(targetPath, ".postcssrc"), parcelPostcss);
  }

  await fsUtils.writeFile(path.resolve(targetPath, "src", "index.css"), cssContent);

  // Inject import into index file
  const ext = config.language === "typescript" ? "tsx" : "js";
  const indexFilePath = path.resolve(targetPath, "src", `index.${ext}`);
  
  if (await fsUtils.fileExists(indexFilePath)) {
    let content = await fsUtils.readFile(indexFilePath);
    content = `import "./index.css";\n` + content;
    await fsUtils.writeFile(indexFilePath, content);
  }
};

module.exports = generateTailwind;
