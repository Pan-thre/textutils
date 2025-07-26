import React from 'react';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <div className="d-flex ms-auto">
          <button className="btn btn-outline-dark mx-1" onClick={() => props.changeMode('light')}>Light</button>
          <button className="btn btn-dark mx-1" onClick={() => props.changeMode('dark')}>Dark</button>
          <button className="btn btn-primary mx-1" onClick={() => props.changeMode('blue')}>Blue</button>
          <button className="btn btn-success mx-1" onClick={() => props.changeMode('green')}>Green</button>
          <button className="btn btn-danger mx-1" onClick={() => props.changeMode('red')}>Red</button>
          <button className="btn btn-purple mx-1" onClick={() => props.changeMode('purple')} style={{ backgroundColor: '#6f42c1', color: 'white' }}>Purple</button>
        </div>
      </div>
    </nav>
  );
}
