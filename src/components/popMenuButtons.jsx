import React from 'react';
import { useContext,useRef } from 'react';
import GameBrain from '../Context';
import './styles/popMenuButton.css'

export function PopMenuButton({ text }) {
  const { state, dispatch } = useContext(GameBrain);


  return (
    <button
      onClick={() => {
        dispatch({ type: 'difficulty', payload: text });
      }}
      className={state.difficulty.includes(text) ? 'difficultyButton selected': 'difficultyButton'}

    >
      {text}
    </button>
  );
}

export function PopMenuCloseButton({isOpen,setIsOpen,scrollToTop}){
  const { state, dispatch } = useContext(GameBrain);
 
  function handleClick(){
   
  dispatch({type:'startMenu', payload:false})
  scrollToTop.current.scrollIntoView()
  setIsOpen(false)
if (state.startMenu){
  // console.log(state.userWonNumberGame)
  dispatch({type:'userGoesFirst', payload:state.userWonNumberGame})
}

  }


  return(

  <button onClick={handleClick} className='closeButton'>{state.startMenu ? 'Start Game' : 'Continue'}</button>
  
  )

}

export function WhoGoesFirstButton({winner,scrollToHeader}) {
  const {state,dispatch} = useContext(GameBrain)
function handleClick(){
 
dispatch({type:'userWonNumberGame',payload:winner})
scrollToHeader.current.scrollIntoView()
dispatch({type:'whoGoesFirstGameOpen'})

}


return(

<button className='closeButton' onClick={handleClick}>Continue</button>
  
)
}
