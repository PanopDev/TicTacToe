import './App.css';
// import GameBoard from './gameBoard';
// import { useState, useRef } from 'react';
// import Header from './header';
import GamepieceX from './components/gamepieceX';
import GamepieceO from './components/gamepieceO';
import Game from './game';

function App() {
 
  return (
    <div className='App'>
      <Game />
    <GamepieceX 
    size = {'100px'}
    solo = {true}
    />  
    <GamepieceO 
    size = {'100px'}
    solo = {true}
    />  
    </div>
    
    
  );
}

export default App;
