import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");

  function handleChangeColor() {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); // update color state to a new value
  }
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child
        onChangeColor={() => {
          handleChangeColor();
          setChildrenColor(getRandomColor());
        }}
        childColor={childrenColor}
      />
      <Child onChangeColor={handleChangeColor} childColor={childrenColor} />
    </div>
  );
}

export default Parent;

// line:15,16 . we are passing down handledowncolor as a Prop to the child component. and whenever we pass a prop, we destructure it where it was uses
