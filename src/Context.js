import { createContext, useReducer, useRef } from 'react';

const GameBrain = createContext({});

//function that contains all the data

function GameBrainData({ children }) {
  //data to use

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

  const gameSettings = {
    difficulty: 'Easy',
    playerGamePiece: 'gamepieceX',
    aiGamePiece: 'gamepieceO',
    userGoesFirst: true,
    gameSquaresFilled: [],
    userSelected: [],
    aiSelected: [],
    fakestate: 0,
    startMenu:true
  };

  function reduce(state, action) {
    switch (action.type) {
      case 'startMenu':
        return { ...state, startMenu: action.payload};
      case 'difficulty':
        return { ...state, difficulty: action.payload };
      case 'playerGamePiece':
        return { ...state, playerGamePiece: action.payload };
      case 'aiGamePiece':
        return { ...state, aiGamePiece: action.payload };
      case 'userGoesFirst':
        return { ...state, userGoesFirst: !state.userGoesFirst };
      case 'gameSquaresFilled': {
        console.log(state.gameSquaresFilled);
        return {
          ...state,
          gameSquaresFilled: [...state.gameSquaresFilled, action.payload],
        };
      }
      case 'userSelected':
        return {
          ...state,
          userSelected: [...state.userSelected, action.payload],
        };
      case 'aiSelected':
        return { ...state, aiSelected: [...state.aiSelected, action.payload] };
      case 'resetGameSquares': {
        return {
          ...state,
          gameSquaresFilled: [],
          userSelected: [],
          aiSelected: [],
        };
      }
      case 'updateState':
        return { ...state, fakestate: state.fakestate + 1 };
        
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reduce, gameSettings);
 
  return (
    <GameBrain.Provider
      value={{
        reduce,
        gameSettings,
        state,
        dispatch,
        gameStats,
      }}
    >
      {children}
    </GameBrain.Provider>
  );
}

export default GameBrain;
export { GameBrainData };
