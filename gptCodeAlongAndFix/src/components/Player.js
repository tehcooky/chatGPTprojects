import React from "react";

function Player(props) {
  const { x, y, width, height } = props;
  const playerStyle = {
    backgroundColor: "red",
    position: "absolute",
    left: x,
    top: y,
    width: width,
    height: height,
  };
  return <div style={playerStyle}></div>;
}

export default Player;
