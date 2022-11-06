import { createContext, useReducer } from 'react';

//create the context variable
const gameSet = createContext({});
const GameBrain = createContext({});

//function that contains all the data
function GameBrainData({ children }) {
  //data to use
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

  return (
    <GameBrain.Provider
      value={{
        reduce,
        gameSettings,
        state,
        dispatch,
      }}
    >
      {children}
    </GameBrain.Provider>
  );
}

export default GameBrain;
export { gameSet, GameBrainData };
