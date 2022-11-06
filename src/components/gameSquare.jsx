import { useRef } from 'react';
import GamepieceX from './gamepieceX';
import GamepieceO from './gamepieceO';
import { gameBrain } from '../Context';
import { useContext } from 'react';

export default function GameSquare({
  handleUserSelection,
  id,
  aiSelected,
  gameSquaresFilled,
  userSelected,
  gameStats,

}) {

const {reduce,gameSettings,state,dispatch} = useContext(gameBrain)

  let game = gameStats.current;
  let innerO = false;
  let innerX = false;
  let handleClass = ()=>  {
    if (aiSelected.includes(Number(id.charAt(10)))) {
      state.aiGamePiece === 'gamepieceX' ? (innerX = true) : (innerO = true);
      return `gameSquare ${state.aiGamePiece}`;
    } else if (userSelected.includes(id)) {
      state.playerGamePiece === 'gamepieceX' ? (innerX = true) : (innerO = true);
      return `gameSquare ${state.playerGamePiece}`;
    } else {
      return 'gameSquare';
    }
  };

  return (
    <div
      id={id}
      className={handleClass()}
      onPointerDown={(e) => {
        console.log(e);
        if (!game.userTurn) return;
        gameSquaresFilled.includes(id)
          ? console.log('Spot already taken')
          : handleUserSelection(e, e.target.id, e.target.id.charAt(10));
      }}
    >
      {innerO && <GamepieceO />}
      {innerX && <GamepieceX />}
    </div>
  );
}
