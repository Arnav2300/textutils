import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [fWord, findWord] = useState("");
  const [rWord, repWord] = useState("");

  const handleUpClick = () => {
    //console.log("uppercase clicked on " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared!", "success");
  };

  const handleFindChange = (event) => {
    findWord(event.target.value);
  };

  const handleReplaceChange = (event) => {
    console.log(repWord(event.target.value));
  };

  const handleReplaceClick = () => {
    let newText = text.replaceAll(fWord, rWord);
    setText(newText);
    props.showAlert(`Replaced ${fWord} with ${rWord}`, "success");
  };

  const handleOnChange = (event) => {
    //console.log("change handled");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#b3b3b3" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleCopyClick}>
          Copy
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <input
          className="form-control"
          type="text"
          placeholder="Find"
          aria-label="find"
          value={fWord}
          onChange={handleFindChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#b3b3b3" : "white",
          }}
        />
        <input
          className="form-control my-1"
          type="text"
          placeholder="Replace"
          aria-label="replace   "
          value={rWord}
          onChange={handleReplaceChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#b3b3b3" : "white",
          }}
        />
        <button className="btn btn-danger my-2" onClick={handleReplaceClick}>
          Replace
        </button>
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview..."}</p>
      </div>
    </>
  );
};

export default TextForm;
