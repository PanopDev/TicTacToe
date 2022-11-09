import React from 'react'
import { useContext } from 'react'
import GameBrain from '../Context'


export default function GameStats() {

    const {gameStats} = useContext(GameBrain)
    const game = gameStats.current

  return (
    <div className='statisticsBoard stats'>
        Games Played: {game.Played} | Won: {game.Won} | Lost: {game.Lost}| Draw:
        {game.tie}
      </div>
  )
}
