import React, { useCallback } from 'react'
import { useState, useEffect, useMemo, useRef } from 'react'
import GameSquare from './components/gameSquare'

export default function GameBoard() {

    const [gameSquaresFilled, setGameSquareFilled] = useState([])
    const [userSelected,setUserSelected] = useState([])
    const [aiSelected,setAiSelected] = useState([])

    const gameStats = useRef({
        userWon: 0,
        aiWon: 0,
        remainingSquares: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        canWin: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]],
        aiCanWin: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]],
        userSelected: [],
        difficulty:'easy',
        aiSelected: [],
        win: false,
        lose: false,
        draw:false,
        userTurn: true,
        set selected(num) { this.remainingSquares = this.remainingSquares.filter((x) => x != num) },
        set canWinUpdate(num) { this.canWin = this.canWin.map((arr) => arr.filter((index) => index != num)) },
        set aiCanWinUpdate(num) { this.aiCanWin = this.aiCanWin.map((arr) => arr.filter((index) => index != num)) }
        
    })



    const game = gameStats.current

    function checkForWin(canWinArray){
        let win = false
        canWinArray.forEach((array)=>{if (array.length === 0){win = true} })
        return win
    }

    function checkForDraw(){
        
   game.remainingSquares.length === 0 && !game.win && !game.lose ? game.draw = true : console.log('keep playing')
   
   return game.draw

    }
    function checkDifficulty (){
        
        switch (game.difficulty) {
          case 'easy':
            {
                AIEasyMode();
            }
            break;

          case 'medium':
            {
              console.log('Difficulty is medium');
            }
            break;

          case 'hard':
            {
              console.log('Difficulty is Hard');
            }
            break;
        }

    }
    // checkDifficulty()
    

    function handleUserSelection(event, id, gameSquareNum) {
        game.userTurn = false 
        game.userSelected.push(gameSquareNum)  //temporary logic, may be unneccessary
                    
        setGameSquareFilled((current)=> [...current, id])
        setUserSelected((current)=> [...current, id])
        // set selected className
                // event.target.className = `gameSquare gameSquareSelected`
        //update remaining squares
        game.selected = gameSquareNum
        //update user can win status
        game.canWinUpdate = gameSquareNum
        
        // check for win, draw or call AI 
        
        checkForWin(game.canWin)
          ? (game.win = true)
          : checkForDraw()
          ? (game.draw = true)
          : setTimeout(checkDifficulty, 800);    
    }
    

    function logicCheck() {
        let result=[]
        game.canWin.forEach((x)=>{ if(x.length < 2 ){result = x}})
        //harder to win vvvv
        //result[0] === undefined ? result[0] = 5 : console.log('defined')
        return result[0];
      }

    function AIEasyMode(){    
        //check for win/lose options  
       let selection = logicCheck()
        //make sure selection is an available option
       if (!game.remainingSquares.includes(selection)){
            selection = game.remainingSquares[game.remainingSquares.length-1] }
        //log to monitor selection
       console.log('AI selection',selection)
        //protection if selection is undefined
       if (selection == undefined ){
             selection = game.remainingSquares[0] }
       let id = 'gameSquare'+selection
        //update remaining square
       game.selected = selection
        //update ai squares selected
       game.aiCanWinUpdate = selection
        //render states and set AI style class on selected square
       setGameSquareFilled((current) => [...current, id])
       setAiSelected((current)=>[...current, selection])    
       checkForWin(game.aiCanWin) ? game.lose = true : checkForDraw() ? game.draw = true : game.userTurn = true
        }

        const [test,setTest] = useState(0)
        let stringTest2 = useRef('string unchanged')
    let stringTest = stringTest2.current
    return (
        <>
                
                <div className='gameBoard'>
                <GameSquare id='gameSquare1' aiSelected={aiSelected} gameSquaresFilled={gameSquaresFilled} userSelected={userSelected}  handleUserSelection={handleUserSelection} />
                <GameSquare id='gameSquare2' aiSelected={aiSelected} gameSquaresFilled={gameSquaresFilled} userSelected={userSelected}  handleUserSelection={handleUserSelection} />
                <GameSquare id='gameSquare3' aiSelected={aiSelected} gameSquaresFilled={gameSquaresFilled} userSelected={userSelected}  handleUserSelection={handleUserSelection} />
                <GameSquare id='gameSquare4' aiSelected={aiSelected} gameSquaresFilled={gameSquaresFilled} userSelected={userSelected}  handleUserSelection={handleUserSelection} />
                <GameSquare id='gameSquare5' aiSelected={aiSelected} gameSquaresFilled={gameSquaresFilled} userSelected={userSelected}  handleUserSelection={handleUserSelection} />
                <GameSquare id='gameSquare6' aiSelected={aiSelected} gameSquaresFilled={gameSquaresFilled} userSelected={userSelected}  handleUserSelection={handleUserSelection} />
                <GameSquare id='gameSquare7' aiSelected={aiSelected} gameSquaresFilled={gameSquaresFilled} userSelected={userSelected}  handleUserSelection={handleUserSelection} />
                <GameSquare id='gameSquare8' aiSelected={aiSelected} gameSquaresFilled={gameSquaresFilled} userSelected={userSelected}  handleUserSelection={handleUserSelection} />
                <GameSquare id='gameSquare9' aiSelected={aiSelected} gameSquaresFilled={gameSquaresFilled} userSelected={userSelected}  handleUserSelection={handleUserSelection} />
            </div>
           
            {game.userTurn && <h2>YOUR TURN!</h2>}
            {game.win && <h1>You WIN!!!</h1>}
            {game.lose && <h1>You LOSE!!!</h1>}
            {game.draw && <h1>DRAW!</h1>}
            {game.remainingSquares}

            <div>-------------------------------------------</div>
            <div>USER: {game.canWin.map((x) => <div key={'canwin' + Math.random()}>{x}</div>)}
 </div>
           <div>-------------------------------------------</div>
            <div>AI: {game.aiCanWin.map((x) => <div key={'canwin' + Math.random()}>{x}</div>)}</div>
            
            
        </>
    )
}
