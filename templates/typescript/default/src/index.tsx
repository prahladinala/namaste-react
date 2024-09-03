import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const App: React.FC = () => (
  <div className="container">
    <h1>Hello, React with TypeScript!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
