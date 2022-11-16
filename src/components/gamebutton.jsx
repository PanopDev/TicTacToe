import { useContext } from "react"
import GameBrain from "../Context";
import './styles/gameButton.css'
export default function Gamebutton({restartGame}) {
    const {state,dispatch,gameStats} = useContext(GameBrain)
  return (
   <button
    
    className='gameButton'
    onClick={(e) => {
      // e.preventDefault()
      restartGame(state, dispatch, gameStats);
    }}
  ><div className="buttonTop"></div>
    PLAY AGAIN
    <div className="buttonBottom"></div>
  </button>
    
  )
}
