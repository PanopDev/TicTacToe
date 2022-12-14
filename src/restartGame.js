export default function restartGame(state, dispatch, gameStats) {

  let game = gameStats.current;
  game.remainingSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  game.win = false;
  game.lose = false;
  game.draw = false;
  game.gameOver = false;
  game.userTurn = true;
  game.playerCanWin = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  game.aiCanWin = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  dispatch({ type: 'resetGameSquares' });
  dispatch({ type: 'userGoesFirst', payload: !state.userGoesFirst });
}
