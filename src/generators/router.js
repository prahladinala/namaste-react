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
  const homeContent = `import React, { useState } from "react";

const Home${isTS ? ": React.FC" : ""} = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Home Page 🏠</h1>
      <p style={{ fontSize: "1.2rem", color: "#888", marginBottom: "2rem" }}>
        Welcome to your React Router setup!
      </p>
      <div className="card">
        <button 
          onClick={() => setCount((c) => c + 1)}
          style={{ padding: "0.6em 1.2em", fontSize: "1em", cursor: "pointer", borderRadius: "8px", border: "1px solid transparent", backgroundColor: "#1a1a1a", color: "white" }}
        >
          Count is {count}
        </button>
      </div>
    </div>
  );
};

export default Home;`;
  await fsUtils.writeFile(path.resolve(targetPath, "src", "pages", `Home.${fileExt}`), homeContent);

  // About page
  const aboutContent = `import React from "react";

const About${isTS ? ": React.FC" : ""} = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>About Us 📖</h1>
      <p style={{ fontSize: "1.2rem", color: "#888", marginBottom: "2rem" }}>
        This page was loaded via React Router.
      </p>
    </div>
  );
};

export default About;`;
  await fsUtils.writeFile(path.resolve(targetPath, "src", "pages", `About.${fileExt}`), aboutContent);

  // 404 page
  const notFoundContent = `import React from "react";
import { Link } from "react-router-dom";

const NotFound${isTS ? ": React.FC" : ""} = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404 🚫</h1>
      <p style={{ fontSize: "1.2rem", color: "#888", marginBottom: "2rem" }}>
        Page not found!
      </p>
      <Link to="/" style={{ color: "#646cff", textDecoration: "none", fontWeight: "bold" }}>
        ← Back to Home
      </Link>
    </div>
  );
};

export default NotFound;`;
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
      <nav style={{ padding: '1rem 2rem', borderBottom: '1px solid #333', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
      </nav>
      <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
`;

  await fsUtils.writeFile(path.resolve(targetPath, "src", `App.${fileExt}`), appContent);
};

module.exports = generateRouter;
