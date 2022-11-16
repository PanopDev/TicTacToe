import React from 'react'
import { useContext } from 'react'
import './styles/gameStatusText.css'
import GameBrain from '../Context'
import GamepieceX from './gamepieceX'
import GamepieceO from './gamepieceO'

export default function GameStatusText({text}) {
const {state,gameStats} = useContext(GameBrain)

  return (
    <>
      <div className='gameStatusText'>{text}</div>
    {state.playerGamePiece=='gamepieceX' && !gameStats.current.gameOver && <div style={{margin:'10px 0 0 0'}}><GamepieceX size={'7rem'} solo={true}/></div>}
    {state.playerGamePiece=='gamepieceO' && !gameStats.current.gameOver && <div style={{margin:'10px 0 0 0'}}><GamepieceO size={'7rem'} solo={true}/></div>}
    </>
  
  )
}
