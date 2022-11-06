// import './App.css';
import GameBoard from './gameBoard';
import { useState, useRef} from 'react';
import Header from './header';
import { GameBrainData, gameSet } from './Context';


function Game() {


  return (
    
      <div className='game'>
      <GameBrainData>
        <Header />
        <GameBoard />
        </GameBrainData>
      </div>
      
    
  );
}

export default Game;
