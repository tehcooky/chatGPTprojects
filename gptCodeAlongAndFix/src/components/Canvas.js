import React, { useRef, useEffect, useState } from "react";
import Player from "./Player";
import PlatformContainer from "./PlatformContainer";
import CanvasElement from "./CanvasElement";

function Canvas() {
  const canvasRef = useRef(null);
  const canvasStyle = {
    backgroundColor: "white",
    display: "block",
    margin: "auto",
  };
  const [x, setX] = useState(50);
  const [y, setY] = useState(60);
  const [platforms, setPlatforms] = useState([
    {
      x: 150,
      y: 200,
      width: 100,
      height: 20,
    },
    {
      x: 400,
      y: 300,
      width: 150,
      height: 20,
    },
    {
      x: 200,
      y: 400,
      width: 80,
      height: 20,
    },
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 800;
    canvas.height = 600;
    canvas.style.marginTop = `${(window.innerHeight - canvas.height) / 2}px`;
    canvas.focus();

    const PLAYER_SPEED = 5;

    const handleKeyDown = (event) => {
      switch (event.code) {
        case "ArrowUp":
          setY((prevY) => prevY - PLAYER_SPEED);
          break;
        case "ArrowDown":
          setY((prevY) => prevY + PLAYER_SPEED);
          break;
        case "ArrowLeft":
          setX((prevX) => prevX - PLAYER_SPEED);
          break;
        case "ArrowRight":
          setX((prevX) => prevX + PLAYER_SPEED);
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    const PLAYER_COLOR = "red";
    const PLATFORM_COLOR = "gray";

    context.fillStyle = PLAYER_COLOR;
    context.fillRect(x, y, 50, 50);

    context.fillStyle = PLATFORM_COLOR;
    platforms.forEach((platform) => {
      context.fillRect(platform.x, platform.y, platform.width, platform.height);
    });
  }, [x, y, platforms]);

  return <CanvasElement canvasRef={canvasRef} style={canvasStyle} />;
}

export default Canvas;
