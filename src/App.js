import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Complaints from './components/Complaints'; // Import the Complaints component
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/complaints" element={<Complaints />} />
            {/* Add other routes here */}
          </Routes>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
