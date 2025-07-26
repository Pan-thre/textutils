import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // 'light', 'dark', 'blue', 'green', etc.
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
      case 'dark':
        backgroundColor = '#343a40';
        break;
      case 'blue':
        backgroundColor = '#0d6efd';
        break;
      case 'green':
        backgroundColor = '#198754';
        break;
      case 'red':
        backgroundColor = '#dc3545';
        break;
      case 'purple':
        backgroundColor = '#6f42c1';
        break;
      default:
        backgroundColor = 'white';
    }

    document.body.style.backgroundColor = backgroundColor;
    setMode(selectedMode);
    showAlert(`${selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)} mode has been enabled!`, 'success');
    document.title = `React App - ${selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)} Mode`;
  };

  return (
    <>
      <Navbar title="Sagnik React" mode={mode} changeMode={changeMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
