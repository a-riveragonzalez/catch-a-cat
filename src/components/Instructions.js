import React from 'react';


export default function Instructions() {

  function startGame() {
    let instructions = document.querySelector(".instructions");
    instructions.style.display = "none";

    // if (!gameStatus) {
    //   let tempArray = [1, 2, 3, 4]
    //   // console.log(tempArray[Math.floor(Math.random() * 4)])
    //   dropBall(tempArray[Math.floor(Math.random() * 4)]);
    // }
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      startGame();
    }
  })

  return (
    <div className='instructions'> 
        <h2> 
            Press ENTER To Start Press UP To End
        </h2>
    </div>
  );
}
