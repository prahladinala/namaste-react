import React, { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Namaste React 🚀
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#888", marginBottom: "2rem" }}>
        Your modern, production-ready React application is running.
      </p>
      
      <div className="card">
        <button 
          onClick={() => setCount((count) => count + 1)}
          style={{ padding: "0.6em 1.2em", fontSize: "1em", cursor: "pointer", borderRadius: "8px", border: "1px solid transparent", backgroundColor: "#1a1a1a", color: "white" }}
        >
          Count is {count}
        </button>
        <p style={{ marginTop: "1rem" }}>
          Edit <code>src/App.tsx</code> and save to test HMR.
        </p>
      </div>
    </div>
  );
};

export default App;
