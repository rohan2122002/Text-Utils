import React, { useState } from 'react'



export default function TextForm(props) {

    const handleClick = () => {
        console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","Succes")

    }
    const handleLowClick = () => {
        console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","Succes")
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText)

    }

    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState("");



    return (
        <>
            <div className="container" style={{ color:  props.mode === 'dark' ? 'white' : 'black'  }}>
                <h1>{props.heading}</h1>

                <div clasName="mb-3">
                    <textarea clasName="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor:  props.mode === 'dark' ? 'grey' : 'white',color:'white'  }} id="myBox" rows="8"></textarea>
                </div>
                <button clasName="btn btn-primary my-2" onClick={handleClick}>Convert to UpperCase</button>
                <button clasName="btn btn-primary my-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button clasName="btn btn-primary mx-2" onClick={handleClearClick}>Erase Text</button>


            </div>
            <div className="container my-3"  style={{ color:  props.mode === 'dark' ? 'white' : 'black'  }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} and {text.length} characters</p>
                <p>{0.0088 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
