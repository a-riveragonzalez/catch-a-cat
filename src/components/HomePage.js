import React from 'react';
import Ball from "./Ball";
import Paddle from "./Paddle"
import Instructions from "./Instructions"


export default function HomePage() {

  return (
    <div>
      {/* board and gameplay */}
      <div className='board'>
        {/* columns for things that fall down */}
        <div className='row'>
          <div className='col-3'>
            <Ball />
          </div>

          <div className='col-3'>
            <Ball />
          </div>

          <div className='col-3'>
            <Ball />
          </div>

          <div className='col-3'>
            <Ball />
          </div>
        </div>

        {/* player paddle */}
        <Paddle />
      </div>

      {/* Game information : instructions, end game message, score */}
      <div>
        <Instructions /> 
      </div> 
    </div>
  );
}
