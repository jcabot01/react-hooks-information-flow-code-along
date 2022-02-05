import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor); //initial color state
  const [childrenColor, setChildrenColor] = useState("#FFF")

  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); //create a handler; upon click, reset color state for this component
    setChildrenColor(newChildColor)
  }
//we pass in handleChangeColor as a prop to <Child />. so everytime we click child component, the handleChangeColor sets State for parent
//we also want to adjust the color for the children, so we pass into <Child /> State "color", which we eventHandle in the <Child /> file
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      
    </div>
  );
}

export default Parent;
