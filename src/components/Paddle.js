import React from 'react';


export default function Paddle() {
  let paddle = document.querySelector(".paddle");
  let xCord = 700;

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.keyCode === 68) {
      xCord += 15;
      paddle.style.left = `${xCord}px`;
    }
  
    if (event.key === "ArrowLeft" || event.keyCode === 65) {
      xCord -= 15;
      paddle.style.left = `${xCord}px`;
    }
  })

  return (
    <div className='paddle'> </div>
  );
}
