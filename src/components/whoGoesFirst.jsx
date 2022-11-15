import React, { useEffect, useState,useContext } from 'react';
import './styles/whoGoesFirst.css';
import { WhoGoesFirstButton } from './popMenuButtons';
import GameBrain from '../Context';
import Setting from './settingsLine';

export default function WhoGoesFirst() {

  const {state,dispatch} = useContext(GameBrain)
  const randomNumber=()=> Math.floor(Math.random()*(11-1)+1)
  const [userNumber, setUserNumber] = useState(0);
  const [aiNumber, setAiNumber] = useState(0);
  const [winningNumber, setWinningNumber] = useState(0);
  const [winner,setWinner] = useState('wait')
 
  function determineWinner(){
    const userTest = Math.abs(userNumber - winningNumber);console.log('usertest',userTest)
     const aiTest = Math.abs(aiNumber - winningNumber);console.log('aitest', aiTest)
    const compare =()=> {if (userTest < aiTest){ return true } else if (userTest === aiTest){return userNumber < winningNumber ? true : false} else return false}
   
    console.log(state.userWonNumberGame)
    compare() ? setWinner(true) : setWinner(false)
  }

  function WhoGoesFirstNumber({ num, id }) {

    function handleClick(e) {
        
          if (userNumber === 0) {
            setUserNumber(Number(e.target.textContent));
            setTimeout(function(){setWinningNumber(randomNumber)},600)
          }
        }

    return (
      <div
        style={userNumber === id ? { backgroundColor: 'white', color:'black',fontSize:'1.5rem' } : {}}
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
useEffect(()=>{determineWinner()},[AiNumberSelect])

  return (
    <div className='whoGoesFirstContainer'>
        <div className='numbersGameHeader'>
        <h1 style={{textDecoration:'underline'}}>Who Goes First?</h1>
        <span>Pick any number from 1-10.</span>
        <span>Whoever is closer goes first</span>
        <span style={{marginBottom:'25px'}}>If its a tie, the lower number wins</span>
        
        </div>
      
      
      <Setting description={'Pick Your Number'}/>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginBottom:'25px',
          maxWidth:'340px'
        }}
      >
        {divNumbers()}
      </div>
      <Setting description={'AI Number'}/>
      <div className='startGamenumberContainer'><div className={userNumber === 0 ? 'whoGoesFirstNumber': 'whoGoesFirstNumber singlenumber'  } style={{lineHeight:'20px',margin:'0px',marginBottom:'25px'}}>{userNumber !== 0 && aiNumber}</div></div>
      <Setting description={'Winning Number'}/>
      <div className='startGamenumberContainer'><div className={winningNumber === 0  ? 'whoGoesFirstNumber': 'whoGoesFirstNumber singlenumber'} style={{lineHeight:'20px',margin:'0px'}}>{winningNumber !== 0 && winningNumber}</div></div>
     
       {/* <h1>AI Number: {userNumber !== 0 && aiNumber}</h1> */}
      {/* <h1>Winning number: {winningNumber !== 0 && winningNumber}</h1> */}
      <div style={{minHeight:'100px'}}>{winningNumber !== 0 && winner === true && <h1>{'You go first'}</h1>}
      {winningNumber !== 0 && winner === false && <h1>{'Ai goes first'}</h1>}</div>
      {winningNumber!== 0 && <WhoGoesFirstButton winner={winner} /> }
    </div>
  );
}
