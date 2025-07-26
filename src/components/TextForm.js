import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var textElem = document.getElementById("myBox");
    textElem.select();
    textElem.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(textElem.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!", "success");
  };

  const [text, setText] = useState('');

  // Dynamic styling based on mode
  const getStyle = () => {
    switch (props.mode) {
      case 'dark':
        return { backgroundColor: '#343a40', color: 'white', border: '1px solid #495057' };
      case 'blue':
        return { backgroundColor: '#0d6efd', color: 'white', border: '1px solid #0a58ca' };
      case 'green':
        return { backgroundColor: '#198754', color: 'white', border: '1px solid #146c43' };
      case 'red':
        return { backgroundColor: '#dc3545', color: 'white', border: '1px solid #b02a37' };
      case 'purple':
        return { backgroundColor: '#6f42c1', color: 'white', border: '1px solid #5936a1' };
      default:
        return { backgroundColor: 'white', color: 'black', border: '1px solid #ced4da' };
    }
  };

  return (
    <>
      <div className="container" style={{ color: getStyle().color }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ ...getStyle(), transition: '0.3s ease' }}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <button className="btn mx-2 my-1" style={getStyle()} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn mx-2 my-1" style={getStyle()} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn mx-2 my-1" style={getStyle()} onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn mx-2 my-1" style={getStyle()} onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn mx-2 my-1" style={getStyle()} onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style={{ color: getStyle().color }}>
        <h2>Your text summary</h2>
        <p>{text.trim().split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>{0.005 * text.trim().split(/\s+/).filter((element) => element.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
