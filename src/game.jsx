import GameBoard from './gameBoard';
import Header from './header';
import { GameBrainData } from './Context';
import WhoGoesFirst from './components/whoGoesFirst';


function Game({width}) {
  return (
    <div style={{maxWidth:width}} className='game'>
      <GameBrainData>
        <Header />
        <GameBoard />
      </GameBrainData>
    </div>
  );
}

export default Game;
