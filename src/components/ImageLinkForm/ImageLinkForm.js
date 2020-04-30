import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f4">
        {"This Magic Brain Will detect faces in your pictures. Give it a try"}
      </p>
      <div className="center">
        <div className="form center pa3 br3 shadow-5">
          <input
            className="f5 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
            placeholder="Enter Image URL"
          />
          <button
            className="w-30 grow f5 link ph3 pw2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
