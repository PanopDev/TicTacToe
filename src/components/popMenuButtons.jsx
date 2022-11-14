import React from 'react';
import { useContext } from 'react';
import GameBrain from '../Context';
import './styles/popMenuButton.css'

export function PopMenuButton({ text }) {
  const { state, dispatch } = useContext(GameBrain);


  return (
    <button
      onClick={() => {
        dispatch({ type: 'difficulty', payload: text });
      }}
      className={'hey'}
      style={
        state.difficulty.includes(text)
          ? { backgroundColor: 'green', fontSize: '1.3rem' }
          : { backgroundColor: 'gray', fontSize: '1.3rem' }
      }
    >
      {text}
    </button>
  );
}

export function PopMenuCloseButton({isOpen,setIsOpen}){
  const { state, dispatch } = useContext(GameBrain);

  function handleClick(){

  dispatch({type:'startMenu', payload:false})
  setIsOpen(false)
  // dispatch({type:'startMenu', payload:false})
if (state.startMenu){
  dispatch({type:'userGoesFirst', payload:state.userWonNumberGame})
}
  }


  return(

  <button onClick={handleClick} className='closeButton'>{state.startMenu ? 'Start Game' : 'Continue'}</button>
  
  )

}

export function WhoGoesFirstButton() {
  const {state,dispatch} = useContext(GameBrain)
function handleClick(){
dispatch({type:'whoGoesFirstGame'})

}


return(

<button className='closeButton' onClick={handleClick}>Continue</button>
  
)
}
