import React, { useState } from "react";

const States = () => {
  const [color, setColor] = useState("red");
  return (
    <div>
      Hi, I am {color} color
      <button onClick={() => setColor("blue")}>Turn blue</button>
    </div>
  );
};

export default States;
