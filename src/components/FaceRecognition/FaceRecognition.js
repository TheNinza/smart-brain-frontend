import React from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        {box.map((rect, i) => {
          return (
            <div
              key={i}
              className="bounding-box"
              style={{
                top: rect.topRow,
                right: rect.rightCol,
                bottom: rect.bottomRow,
                left: rect.leftCol,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
