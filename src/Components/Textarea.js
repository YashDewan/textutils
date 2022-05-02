import React, { useState } from 'react'

export default function Textarea(props) {

    const [text, settext] = useState("");

    let clickUp = () => {
        let upperText = text.toUpperCase();
        settext(upperText);
        props.showAlert("success" , "Converted to UpperCase");
    }

    let clickLow = () => {
        let lowerText = text.toLowerCase();
        settext(lowerText);
        props.showAlert("success" , "Converted to LowerCase");
    }

    let clickClear = () => {
        let newtext = "";
        settext(newtext);
        props.showAlert("success" , "Cleared..");
    }
    let copyText = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("success" , "Copied Successfully");
    }

    let handleOnChange = (event) => {
        settext(event.target.value);
    }

    return (
        <>
            <div className="mb-3 container my-3" style={{color : props.mode === "dark" ? "white" : "black"}}>
                <h1>{props.heading}</h1>
                <textarea style={{backgroundColor : props.mode === "light" ? "white" : "black" , color : props.mode === "dark" ? "white" : "black"}} className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="9"></textarea>
                <button disabled = {text.length===0} className='btn btn-secondary my-3 mx-2' onClick={clickUp}>UpperCase</button>
                <button disabled = {text.length===0} className='btn btn-secondary my-3 mx-2' onClick={clickLow}>LowerCase</button>
                <button disabled = {text.length===0} className='btn btn-secondary my-3 mx-2' onClick={copyText}>Copy Text</button>
                <button disabled = {text.length===0} className='btn btn-secondary my-3 mx-2' onClick={clickClear}>Clear Text</button>
            </div>
            <div className="container my-3"  style={{color : props.mode === "dark" ? "white" : "black"}}>
                <h1>Text Summary</h1>
                <p>Word Count : {text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} | Character Count : {text.length} | Line Count : {text.split("\n").length}</p>
                <h1>Text Preview</h1>
                <p>{text.length > 0 ? text :"Enter something to preview ..."}</p>
            </div>
        </>
    );
}
