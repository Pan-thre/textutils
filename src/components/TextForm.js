import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = () =>{
    let newText = '';
    setText(newText)
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const handleCopy = () =>{
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);

  }


  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

     const [text,setText] =useState('');
  return (
    <>
     <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
      <h1>{props.heading}</h1>
        <div className="mb-3">
  <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white'}} id="myBox" rows="9"></textarea>
</div>
    <button className="btn btn-primary mx-3" onClick={handleUpClick} >Convert to Uppercase</button>
    <button className="btn btn-primary mx-3" onClick={handleLoClick} >Convert to Lowercase</button>
    <button className="btn btn-primary mx-3" onClick={handleClearClick} >Clear text</button>
    <button className="btn btn-primary mx-3" onClick={handleCopy} >Copy Text</button>
    <button className="btn btn-primary mx-3" onClick={handleExtraSpaces} >Remove extra space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}} >
      <h2> Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> {0.005 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
    </>
 )
}