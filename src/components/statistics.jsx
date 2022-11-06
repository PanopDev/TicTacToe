import { useContext } from "react";
import GameBrain from "../Context";

export default function Statistics({
  restartGame
}) {

const {state,gameStats,dispatch} = useContext (GameBrain)
const game = gameStats.current;

  return (
    <>
    <div className='statisticsBoard'>
      {game.userTurn && <h2>YOUR TURN!</h2>}
      {game.gameOver && (
        <>
        <h1 style={{width:'100%'}}>
          GAME OVER!
          </h1>
          <button
            style={{ height: '50px'}}
            onClick={() => {
              restartGame(
                state,
                dispatch,
                gameStats,

                

              );
            }}
          >
            RESTART 
          </button>
          
        
      </>
      )}

    </div>
    <div className="statisticsBoard stats">
    Games Played: {game.Played} |
    Won: {game.Won} |
    Lost: {game.Lost}|
    Draw:{game.tie}
  </div>
  </>
  );
}
