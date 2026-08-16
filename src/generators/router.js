const fsUtils = require("../utils/filesystem");
const path = require("path");

const generateRouter = async (config, targetPath, pkg) => {
  if (!config.router) return;

  // Add dependency
  pkg.dependencies = {
    ...pkg.dependencies,
    "react-router-dom": "^6.23.1"
  };

  const isTS = config.language === "typescript";
  const ext = isTS ? "tsx" : "jsx"; // wait, the base template uses App.tsx or App.js, so we stick to that.
  const fileExt = isTS ? "tsx" : "js";

  // Create routes directory
  await fsUtils.ensureDir(path.resolve(targetPath, "src", "pages"));
  
  // Home page
  const homeContent = `import React from "react";\n\nconst Home${isTS ? ": React.FC" : ""} = () => {\n  return (\n    <div>\n      <h1>Home Page</h1>\n      <p>Welcome to the home page!</p>\n    </div>\n  );\n};\n\nexport default Home;`;
  await fsUtils.writeFile(path.resolve(targetPath, "src", "pages", `Home.${fileExt}`), homeContent);

  // About page
  const aboutContent = `import React from "react";\n\nconst About${isTS ? ": React.FC" : ""} = () => {\n  return (\n    <div>\n      <h1>About Page</h1>\n      <p>This is the about page.</p>\n    </div>\n  );\n};\n\nexport default About;`;
  await fsUtils.writeFile(path.resolve(targetPath, "src", "pages", `About.${fileExt}`), aboutContent);

  // 404 page
  const notFoundContent = `import React from "react";\nimport { Link } from "react-router-dom";\n\nconst NotFound${isTS ? ": React.FC" : ""} = () => {\n  return (\n    <div>\n      <h1>404 - Not Found</h1>\n      <Link to="/">Go Home</Link>\n    </div>\n  );\n};\n\nexport default NotFound;`;
  await fsUtils.writeFile(path.resolve(targetPath, "src", "pages", `NotFound.${fileExt}`), notFoundContent);

  // Update App component to include Router
  const appContent = `import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App${isTS ? ": React.FC" : ""} = () => {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
`;

  await fsUtils.writeFile(path.resolve(targetPath, "src", `App.${fileExt}`), appContent);
};

module.exports = generateRouter;
