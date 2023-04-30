import React from "react";

function Platform(props) {
  const { x, y, width, height } = props;
  const platformStyle = {
    backgroundColor: "gray",
    position: "absolute",
    left: x,
    top: y,
    width: width,
    height: height,
  };
  return <div style={platformStyle}></div>;
}

export default Platform;
