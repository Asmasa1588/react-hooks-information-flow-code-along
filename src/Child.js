import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, childColor }) {
  return (
    <div
      className="child"
      onClick={onChangeColor}
      style={{ backgroundColor: childColor }}
    />
  );
}

export default Child;
