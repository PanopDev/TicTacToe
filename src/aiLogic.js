export default function callAI(
  state,
  dispatch,
  gameStats,
  checkForWin,
  checkForDraw,
  handleGameStats,
) {
  const game = gameStats.current;

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
      default : {
        return AiMedium()
      }
    }
  }

  function AiEasy() {
    console.log('game difficulty', state.difficulty)
    let result = [];
    game.playerCanWin.forEach((x) => {
      if (x.length < 2) {
        result = x;
      }
    });
    if (!game.remainingSquares.includes(result[0])) {
      result = [game.remainingSquares[game.remainingSquares.length - 1]];
    }
    return result[0];
    //harder to win vvvv
    //result[0] === undefined ? result[0] = 5 : console.log('defined')
  }

  function AiMedium() {
    return AiEasy();
  }

  function AiHard() {
    return AiEasy();
  }

  function AiTurn() {
    //check for win/lose options
    let selection = checkDifficulty(); 
    //log to monitor selection
    console.log('AI selection', selection);
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
    // setGameSquareFilled((current) => [...current, id]);
    dispatch({type:'gameSquaresFilled',payload:id})
    // setAiSelected((current) => [...current, selection]);
    dispatch({type:'aiSelected', payload:selection})
    checkForWin(game.aiCanWin)
      ? (game.lose = true)
      : checkForDraw()
      ? (game.draw = true)
      : (game.userTurn = true);
      handleGameStats()
      if (game.win || game.lose || game.draw) {
        game.gameOver = true;
        // dispatch({type:'resetGameSquares'})
        console.log(game.gameOver);
      }
  }

  game.userTurn = false;
  setTimeout(AiTurn, 500);
}
