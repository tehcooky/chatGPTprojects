import React from "react";
import Platform from "./Platform";

function PlatformContainer(props) {
  const { platforms } = props;
  return (
    <>
      {platforms.map((platform, index) => (
        <Platform key={index} {...platform} />
      ))}
    </>
  );
}

export default PlatformContainer;
