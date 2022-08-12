import React, {useState} from 'react'





export default function TextForm(props) {
    
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        // setText("You have clicked on handleUpClick");
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
    }
    const handleCopy = ()=>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange = (event) =>{
        // console.log("OnChange was clicked");
        setText(event.target.value);
    }
    const[text, setText] = useState('')
    
  return (
    <>
        
        <div className="container mb-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            {/* <label for="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode=== 'dark'?'white':'black'}} ></textarea>
        </div>
        <div className="container mb-3">
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        
        <div className="container my-2" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length - 1} Words and {text.length} Characters</p>
            <p>{0.08 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text in textbox to preview here"}</p>
        </div>
    </>
  )
}
