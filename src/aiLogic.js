export default function callAI(
  state,
  dispatch,
  gameStats,
  checkForWin,
  checkForDraw,
  handleGameStats
) {
  const game = gameStats.current;
  const randomRemainingSquare = Math.floor(
    Math.random() * game.remainingSquares.length
  );
  


  function checkDifficulty() {
    switch (state.difficulty) {
      case 'Easy': {
        return AiEasy();
      }

      case 'Medium': {
        return AiMedium();
      }

      case 'Hard': {
        return AiHard();
      }
      default: {
        return AiMedium();
      }
    }
  }

  function AiEasy() {
    
  
    let result = [];
    game.playerCanWin.forEach((x) => {
      if (x.length < 2) {
        result = x;
      }
    });
    if (!game.remainingSquares.includes(result[0])) {
      result = [game.remainingSquares[randomRemainingSquare]];
    }
    return result[0];
  }

  function AiMedium() {
  
    let result = [];

    game.playerCanWin.forEach((x) => {
      if (x.length < 2 && game.remainingSquares.includes(x[0])) {
        result = x;
        // console.log('player can win log', x);
      }
    });
    game.aiCanWin.forEach((x) => {
      if (x.length < 2 && game.remainingSquares.includes(x[0])) {
        result = x;
        // console.log('AI can win log', x);
      }
    });

    if (!game.remainingSquares.includes(result[0])) {
      result = [game.remainingSquares[randomRemainingSquare]];
    }

    return result[0];
  }

 

  function AiHard() {
    
    const remainingCornerNumbers =[];
   
    function checkIfPlayerCanWin() {
      playerCanWin.forEach((x) => {
        if (game.remainingSquares.includes(x)) {
          result = x;
        }
      });
    }
   
    game.remainingSquares.forEach((x)=>{if(x % 2 !== 0){remainingCornerNumbers.push(x)}})
    const randomCornerSquare = Math.floor(Math.random()*remainingCornerNumbers.length)

    let result = game.remainingSquares.includes(5) ? 5 : game.remainingSquares[randomRemainingSquare]
    if (remainingCornerNumbers.length !== 0 && !remainingCornerNumbers.includes(5)){
      result = remainingCornerNumbers[randomCornerSquare]

    }

   
    const playerCanWin = [];
    const aiCanWin = [];

    game.playerCanWin.forEach((x) => {
      if (x.length < 2) {
        playerCanWin.push(x[0]);
        // console.log('player can win log', x);
      }
    });

    game.aiCanWin.forEach((x) => {
      if (x.length < 2) {
        aiCanWin.push(x[0]);
        // console.log('AI can win log', x);
      }
    });
    
    if (aiCanWin.length !== 0) {
      aiCanWin.forEach((x) => {
        if (game.remainingSquares.includes(x)) {
          result = x;
        } else checkIfPlayerCanWin();
      });
    } else if (playerCanWin.length !== 0) {
      checkIfPlayerCanWin()
    }

    return result;
  }

  function aiRidiculous(){


  }

  function AiTurn() {
    //check for win/lose options
    let selection = checkDifficulty();
    //log to monitor selection
    // console.log('AI selection', selection);
    //protection if selection is undefined
    if (selection == undefined) {
      selection = game.remainingSquares[0];
    }
    let id = 'gameSquare' + selection;
    //update remaining square
    game.selected = selection;
    //update ai squares selected
    game.aiCanWinUpdate = selection;
    //render states and set AI style class on selected square
    dispatch({ type: 'gameSquaresFilled', payload: id });

    dispatch({ type: 'aiSelected', payload: selection });
    checkForWin(game.aiCanWin)
      ? (game.lose = true)
      : checkForDraw()
      ? (game.draw = true)
      : (game.userTurn = true);
    handleGameStats();
    if (game.win || game.lose || game.draw) {
      game.gameOver = true;
      
    }
  }

  game.userTurn = false;
  setTimeout(AiTurn, 500);
}
