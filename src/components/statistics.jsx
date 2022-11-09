import { useContext } from 'react';
import GameBrain from '../Context';
import GameStatusText from './gameStatusText';
import GameButton from './gamebutton';
import GameStats from './gameStats';

export default function Statistics({ restartGame }) {
  const {gameStats} = useContext(GameBrain);
  const game = gameStats.current;

  return (
    <>
      <div className='statisticsBoard'>
        {game.userTurn && <GameStatusText text='YOUR TURN!'/>}
        {game.gameOver && (
          <>
            <GameStatusText text='GAME OVER!'/>
            <GameButton text="RESTART" restartGame={restartGame}/>
          </>
        )}
      </div>
     <GameStats />
    </>
  );
}


