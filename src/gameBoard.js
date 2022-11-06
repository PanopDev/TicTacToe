import React, { useCallback, useContext } from 'react';
import { useState, useEffect, useMemo, useRef } from 'react';
import GameSquare from './components/gameSquare';
import callAI from './aiLogic';
import restartGame from './restartGame';
import Statistics from './components/statistics';
import Result from './components/result';
import { gameSettings } from './Context';

export default function GameBoard() {
  const {
    difficulty,
    gameStats,
    playerGamePiece,
    aiGamePiece,
    setPlayerGamePiece,
    setAiGamePiece,
    userGoesFirst,
    setUserGoesFirst,
  } = useContext(gameSettings);
  
  const [gameSquaresFilled, setGameSquareFilled] = useState([]);
  const [userSelected, setUserSelected] = useState([]);
  const [aiSelected, setAiSelected] = useState([]);
  const [clientStyle, setClientStyle] = useState({});
  const [, updateState] = useState(0);
  const game = gameStats.current;

  function checkForWin(canWinArray) {
    let win = false;
    canWinArray.forEach((array) => {
      if (array.length === 0) {
        win = true;
      }
    });
    return win;
  }

  function checkForDraw() {
    game.remainingSquares.length === 0 && !game.win && !game.lose
      ? (game.draw = true)
      : console.log('keep playing');
    return game.draw;
  }

  function whoGoesFirst() {
    if (userGoesFirst) {
      game.userTurn = true;
      updateState((cur) => cur + 1);
    } else if (!userGoesFirst) {
      game.userTurn = false;
      updateState((cur) => cur + 1);
      setTimeout(() => {
        callAI(
          gameStats,
          setAiSelected,
          setGameSquareFilled,
          checkForWin,
          checkForDraw,
          handleGameStats,
          difficulty
        );
      }, 500);
    }
  }

  function handleUserSelection(event, id, gameSquareNum) {
    game.userTurn = false;
    setGameSquareFilled((current) => [...current, id]);
    setUserSelected((current) => [...current, id]);
    //update remaining squares
    game.selected = gameSquareNum;
    //update user can win status
    game.canWinUpdate = gameSquareNum;
    // check for win, draw or call AI
    checkForWin(game.playerCanWin)
      ? (game.win = true)
      : checkForDraw()
      ? (game.draw = true)
      : callAI(
          gameStats,
          setAiSelected,
          setGameSquareFilled,
          checkForWin,
          checkForDraw,
          handleGameStats,
          difficulty
        );
    if (game.win || game.lose || game.draw) {
      game.gameOver = true;
      setGameSquareFilled([]);
      console.log(game.gameOver);
    }
    handleGameStats();
  }

  function handleGameStats() {
    if (game.win) {
      game.Won = game.Won + 1;
      game.Played = game.Played + 1;
    } else if (game.draw) {
      game.tie = game.tie + 1;
      game.Played = game.Played + 1;
    } else if (game.lose) {
      game.Lost = game.Lost + 1;
      game.Played = game.Played + 1;
    }
  }

  function setGameSquares() {
    let gameSquares = [];
    for (let i = 1; i <= 9; i++) {
      gameSquares.push(
        <GameSquare
          id={`gameSquare${i}`}
          key={`gameSquare${i}`}
          aiSelected={aiSelected}
          gameSquaresFilled={gameSquaresFilled}
          userSelected={userSelected}
          handleUserSelection={handleUserSelection}
          gameStats={gameStats}
          setGameSquareFilled={setGameSquareFilled}
          aiGamePiece={aiGamePiece}
          playerGamePiece={playerGamePiece}
          setAiGamePiece={setAiGamePiece}
          setPlayerGamePiece={setPlayerGamePiece}
        />
      );
    }
    return gameSquares;
  }

  useEffect(() => {
    whoGoesFirst();
  }, [userGoesFirst]);

  const elGameBoard = useRef();

  // window.addEventListener(
  //   'resize',
  //   () => {
  //     console.log(
  //       'resize',
  //       setClientStyle(elGameBoard.current.getBoundingClientRect())
  //     );
  //   },
  //   { once: true }
  // );

  useEffect(() => {
    setClientStyle(elGameBoard.current.getBoundingClientRect());
  }, []);

  const gameResultlocation = {
    top: Number(clientStyle.height / 2) + Number(clientStyle.top) - 68 + 'px',
    left: Number(clientStyle.width / 2) + Number(clientStyle.left) + 'px',
  };

  return (
    <>
      <div ref={elGameBoard} className='gameBoard'>
        {setGameSquares()}

        {game.win && (
          <Result gameResultlocation={gameResultlocation} text={'Win!'} />
        )}
        {game.lose && (
          <Result gameResultlocation={gameResultlocation} text={'Lose!'} />
        )}
        {game.draw && (
          <Result gameResultlocation={gameResultlocation} text={'Draw!'} />
        )}
      </div>
      <Statistics
        gameStats={gameStats}
        restartGame={restartGame}
        setGameSquareFilled={setGameSquareFilled}
        setUserSelected={setUserSelected}
        setAiSelected={setAiSelected}
        userGoesFirst={userGoesFirst}
        setUserGoesFirst={setUserGoesFirst}
      />
    </>
  );
}
