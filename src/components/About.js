import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function About(props) {
  const isDarkBackground = ['dark', 'blue', 'green', 'red', 'purple'].includes(props.mode);

  const themeStyle = {
    backgroundColor:
      props.mode === 'dark' ? '#343a40' :
      props.mode === 'blue' ? '#0d6efd' :
      props.mode === 'green' ? '#198754' :
      props.mode === 'red' ? '#dc3545' :
      props.mode === 'purple' ? '#6f42c1' :
      'white',
    color: isDarkBackground ? 'white' : 'black',
    border: `1px solid ${isDarkBackground ? 'white' : 'black'}`,
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.4s ease',
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    color: isDarkBackground ? 'white' : 'black',
    fontWeight: 'bold',
  };

  return (
    <div className="container py-4" style={themeStyle}>
      <h1 className="mb-4">About Us</h1>
      <div className="accordion" id="accordionExample">
        
        {/* Item 1 */}
        <div className="accordion-item" style={themeStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed d-flex align-items-center gap-2"
              style={{ ...themeStyle, ...buttonStyle }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <i className="bi bi-info-circle"></i> Introduction
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={themeStyle}>
              <strong>This is the first item’s accordion body.</strong> It includes animated transitions and icons.
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item my-3" style={themeStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed d-flex align-items-center gap-2"
              style={{ ...themeStyle, ...buttonStyle }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <i className="bi bi-layers-half"></i> Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={themeStyle}>
              <strong>This is the second item’s accordion body.</strong> The design now matches the home section style with added icons.
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="accordion-item" style={themeStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed d-flex align-items-center gap-2"
              style={{ ...themeStyle, ...buttonStyle }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <i className="bi bi-stars"></i> Our Goal
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={themeStyle}>
              <strong>This is the third item’s accordion body.</strong> With smooth animations and visuals to enhance user engagement.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
