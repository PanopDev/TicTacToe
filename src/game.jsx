import GameBoard from './gameBoard';
import Header from './header';
import { GameBrainData } from './Context';

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
