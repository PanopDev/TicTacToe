import React, { useEffect, useState,useContext } from 'react';
import './styles/whoGoesFirst.css';
import { WhoGoesFirstButton } from './popMenuButtons';
import GameBrain from '../Context';

export default function WhoGoesFirst() {

  const {state,dispatch} = useContext(GameBrain)
  const randomNumber=()=> Math.floor(Math.random()*(11-1)+1)
  const [userNumber, setUserNumber] = useState(0);
  const [aiNumber, setAiNumber] = useState(0);
  const [winningNumber, setWinningNumber] = useState(0);
 
  function determineWinner(){
    // if (winningNumber !== 0){

    // }
    const userTest = Math.abs(userNumber - winningNumber);console.log(userTest)
     const aiTest = Math.abs(aiNumber - winningNumber);console.log(aiTest)
    const compare =()=> {if (userTest < aiTest){ return true } else if (userTest === aiTest){return userNumber < winningNumber ? true : false} else return false}
    dispatch({type:'userWonNumberGame',payload:compare()})
    if(compare()===true){return 'You go First'}
    else {return 'Ai Goes First'}

  }

  function WhoGoesFirstNumber({ num, id }) {

    function handleClick(e) {
        
          if (userNumber === 0) {
            setUserNumber(Number(e.target.textContent));
            setTimeout(function(){setWinningNumber(randomNumber)},1000)
          }
        }

    return (
      <div
        style={userNumber === id ? { backgroundColor: 'gray' } : {}}
        className='whoGoesFirstNumber'
        onClick={(e) =>handleClick(e)}
      >
        {num}
      </div>
    );
  }

function AiNumberSelect(){
    let number = Math.floor(Math.random()*(11-1)+1)
    console.log('ai number select')
    if (number == userNumber){AiNumberSelect()}
        else {setAiNumber(Number(number))}
    }
       

  function divNumbers() {
    const numbers = [];
    for (let i = 1; i < 11; i++) {
      numbers.push(<WhoGoesFirstNumber id={i} key={`number${i}`} num={i} />);
    }
    return numbers;
  }


useEffect(()=>{AiNumberSelect()},[userNumber])

  return (
    <div className='whoGoesFirstContainer'>
      <h1>Who Goes First?</h1>
      <p>
        Pick any number from 1-10.
        Whoever is closer without going over goes first
      </p>
      <h2>Your Number</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center',
          margin: '25px',
        }}
      >
        {divNumbers()}
      </div>
      {userNumber !== 0 && <h1>AI Number:{aiNumber}</h1>}
      {winningNumber !== 0 && <h1>winning number: {winningNumber}</h1>}
      {winningNumber !== 0 && <h1>{determineWinner()}</h1>}
      <WhoGoesFirstButton /> 
    </div>
  );
}
