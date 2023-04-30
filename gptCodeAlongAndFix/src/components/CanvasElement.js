import React from "react";

function CanvasElement(props) {
  return <canvas ref={props.canvasRef} style={props.style}></canvas>;
}

export default CanvasElement;
