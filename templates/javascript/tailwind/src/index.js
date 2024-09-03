import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-blue-500">
      Hello, Parcel with React!
    </h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
