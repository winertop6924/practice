import React, { useState } from "react";
import "./App.css";

const Say = () => {
  const [message, setMessage] = useState("보겸싫어함");
  const onClickEnter = () => setMessage("보이루~");
  const onClickLeave = () => setMessage("보이~");

  const [color, setColor] = useState("black");
  return (
    <div>
      <button onClick={onClickEnter}>입장↗</button>
      <button onClick={onClickLeave}>퇴장↘</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨강!
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록!
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파랑!
      </button>
      <button style={{ color: "black" }} onClick={() => setColor("black")}>
        초기화
      </button>
    </div>
  );
};
export default Say;
