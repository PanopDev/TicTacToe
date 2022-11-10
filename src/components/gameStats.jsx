import React from 'react';
import { useContext } from 'react';
import GameBrain from '../Context';
import './styles/gameStats.css';

export default function GameStats() {
  const { gameStats } = useContext(GameBrain);
  const game = gameStats.current;

  return (
    <>
      <div className='statisticsBoard stats'>
        <div className='stats statisticsBoardstatsTop'>
          Games Played: {game.Played}
        <div className='statsDivider' ></div>
        </div>
        <div className='stats statisticsBoardstatsBottom'>
          <div>Won: {game.Won}</div>
          <div> Lost: {game.Lost}</div>
          <div>Draw:{game.tie}</div>
        </div>
      </div>
    </>
  );
}

