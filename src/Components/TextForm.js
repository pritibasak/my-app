import React,{ useState } from 'react'



export default function TextForm(props) {

  const handleUpClick = () => {

    let newText = text.toUpperCase();
    setText(newText)
    //console.log("Uppercase was clicked",text);
    props.showAlert("Converted to Uppercase",'success');
  }

  const handleLowClick = () => {

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase",'success');
    //console.log("Uppercase was clicked",text);
  }

  const handleClearClick = () => {

    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared",'success');
    //console.log("Uppercase was clicked",text);
  }

  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
}

const handleCopy = () => {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text copied",'success');

}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed",'success');

}
  const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
      <div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white', color: props.mode==='dark' ? 'white' : 'black'}} value={text}>
  </textarea>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

     </div>
   </div>

   <div className="Container my-4" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
     <h2> Your Text Summary </h2>
     <p> {text.split(" ").length} words , {text.length} characters</p>
     <p> Total {0.08 * text.split(" ").length} minutes required to read </p>
     <h2>Preview</h2>
     <p> {text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
   </div>
    </>
  )
}

