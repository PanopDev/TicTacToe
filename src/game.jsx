// import './App.css';
import GameBoard from './gameBoard';
import { useState, useRef, useReducer } from 'react';
import Header from './header';
import { gameBrain } from './Context';
import { gameSet } from './Context';

function Game() {
  const [difficulty, setDifficulty] = useState('Easy');
  const [playerGamePiece, setPlayerGamePiece] = useState('gamepieceX');
  const [aiGamePiece, setAiGamePiece] = useState('gamepieceO');
  const [userGoesFirst, setUserGoesFirst] = useState(false);
  const gameStats = useRef({
    Won: 0,
    Lost: 0,
    tie: 0,
    Played: 0,
    win: false,
    lose: false,
    draw: false,
    gameOver: false,
    userTurn: true,
    remainingSquares: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    playerCanWin: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ],
    aiCanWin: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ],

    set selected(num) {
      this.remainingSquares = this.remainingSquares.filter((x) => x != num);
    },
    set canWinUpdate(num) {
      this.playerCanWin = this.playerCanWin.map((arr) =>
        arr.filter((index) => index != num)
      );
    },
    set aiCanWinUpdate(num) {
      this.aiCanWin = this.aiCanWin.map((arr) =>
        arr.filter((index) => index != num)
      );
    },
  });
  const game = gameStats.current;

  const gameSettings = {
    difficulty: 'Easy',
    playerGamePiece: 'gamepieceX',
    aiGamePiece: 'gamepieceO',
    userGoesFirst: false,
  };

  function reduce(state, action) {
    switch (action.type) {
      case 'difficulty':
        return { ...state, difficulty: action.payload };
      case 'playerGamePiece':
        return { ...state, playerGamePiece: action.payload };
      case 'aiGamePiece':
        return { ...state, aiGamePiece: action.payload };
      case 'userGoesFirst':
        return { ...state, userGoesFirst: !state.userGoesFirst };
      default:
       return state;
    }
  }

  const [state, dispatch] = useReducer(reduce, gameSettings);
  //dispatch({type:'description' payload:'value'})
  return (
    
    <gameSet.Provider
      value={{
        gameStats,
        setDifficulty,
        difficulty,
        playerGamePiece,
        setPlayerGamePiece,
        aiGamePiece,
        setAiGamePiece,
        
        
      }}
    >
      <gameBrain.Provider value={{reduce,gameSettings,state,dispatch}}> 
      <div className='game'>
        <Header />
        <GameBoard />
      </div>
      </gameBrain.Provider>
    </gameSet.Provider>
    
  );
}

export default Game;
