import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const App: React.FC = () => (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-blue-500">Hello, Namaste React with TypeScript and Tailwind CSS! </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
