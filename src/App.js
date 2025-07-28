import './App.css';
// App.js
import 'bootstrap-icons/font/bootstrap-icons.css'; // ← ✅ Add this line at the top

import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const changeMode = (selectedMode) => {
    let backgroundColor;
    switch (selectedMode) {
      case 'dark': backgroundColor = '#343a40'; break;
      case 'blue': backgroundColor = '#0d6efd'; break;
      case 'green': backgroundColor = '#198754'; break;
      case 'red': backgroundColor = '#dc3545'; break;
      case 'purple': backgroundColor = '#6f42c1'; break;
      default: backgroundColor = 'white';
    }

    document.body.style.backgroundColor = backgroundColor;
    setMode(selectedMode);
    showAlert(`${selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)} mode has been enabled!`, 'success');
    document.title = `React App - ${selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)} Mode`;
  };

  return (
    <Router>
      <Navbar title="Sagnik React" mode={mode} changeMode={changeMode} aboutText="About" />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
