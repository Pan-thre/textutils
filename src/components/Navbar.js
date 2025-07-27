import React from 'react';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColorOptions" aria-controls="navbarColorOptions" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColorOptions">
          <div className="d-flex ms-auto flex-wrap">
            <button className="btn btn-outline-dark m-1" onClick={() => props.changeMode('light')}>Light</button>
            <button className="btn btn-dark m-1" onClick={() => props.changeMode('dark')}>Dark</button>
            <button className="btn btn-primary m-1" onClick={() => props.changeMode('blue')}>Blue</button>
            <button className="btn btn-success m-1" onClick={() => props.changeMode('green')}>Green</button>
            <button className="btn btn-danger m-1" onClick={() => props.changeMode('red')}>Red</button>
            <button className="btn m-1" style={{ backgroundColor: '#6f42c1', color: 'white' }} onClick={() => props.changeMode('purple')}>Purple</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
