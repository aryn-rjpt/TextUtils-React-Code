import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm({ heading = "Enter Something", displayMode }) {
    const [text, setText] = useState("");
    const [spaces, setSpaces] = useState(0);
    const [copyBtnText, setCopyBtnText] = useState('Copy');
    const [copyBtnState, setCopyBtnState] = useState(false);

    function handleUpClick() {
        setText(text.toUpperCase());
    }

    function handleLowerClick() {
        setText(text.toLowerCase());
    }

    function handleChange(event) {
        setText(event.target.value);
        let spaces_matches = text.match(/\s/g);
        setSpaces(spaces_matches ? spaces_matches.length : 0);
        setCopyBtnText('Copy');
        setCopyBtnState(false);
    }

    function handleCopy() {
        navigator.clipboard.writeText(text);
        setCopyBtnText('Copied');
        setCopyBtnState(true);
    }

    function removeExtraSpaces(){
        setText(text.replace(/\s+/g," "));
    }

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h2 className='my-3'>{heading}</h2>
                    <textarea className={`${displayMode === "dark" ? "textareaDarkStyle" : ""} form-control `} id="myBox" value={text} onChange={handleChange} rows="8" ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowerClick}>Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={ removeExtraSpaces }>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={() => { setText("") }}>Clear</button>
                <button className="btn btn-primary mx-2 my-1" onClick={ handleCopy } disabled={copyBtnState || text.length===0}> {copyBtnText} </button>
            </div>
            <div className='container my-3 text-center'>
                <h2 className='my-4'>Your Text Summary</h2>
                <div className="row align-items-center my-3">
                    <div className="col">
                        Words: {text.length > 0 ? text.trim().split(/\s+/).length : 0}
                    </div>
                    <div className="col">
                        Characters: {text.length}
                    </div>
                    <div className="col">
                        Spaces: {text.length > 0 ? spaces : 0} 
                    </div>
                    <div className="col">
                        {(text.trim().split(/\s+/).length - 1) * 0.004} Minutes Read
                    </div>
                </div>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}
