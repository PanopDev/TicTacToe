import React from 'react';
import PopMenuButton from './popMenuButton';
import { useState } from 'react';
import Setting from './settingsLine';
import GamepieceO from './gamepieceO';
import GamepieceX from './gamepieceX';
import { gameSettings} from '../Context';
import { useContext } from 'react';
export default function PopupMenu({
  isOpen,
  setIsOpen,
  
}) {
  const {difficulty,
    setDifficulty,
    gameStats,
    aiGamePiece,
    setAiGamePiece,
    playerGamePiece,
    setPlayerGamePiece,} = useContext(gameSettings)

  const game = gameStats.current;

  return (
    <>
      <div className={isOpen ? 'popupMenu popupMenuOpen' : 'popupMenu'}>
        {isOpen && (
          <div className='innerTest'>
            <h1
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                width: '100%',
                paddingBottom: '50px',
              }}
            >
              Settings:
            </h1>

            <Setting
              description={'Difficulty'}
              settings={
                <>
                  <PopMenuButton
                    setDifficulty={setDifficulty}
                    difficulty={difficulty}
                    text={'Easy'}
                  />
                  <PopMenuButton
                    setDifficulty={setDifficulty}
                    difficulty={difficulty}
                    text={'Medium'}
                  />
                  <PopMenuButton
                    setDifficulty={setDifficulty}
                    difficulty={difficulty}
                    text={'Hard'}
                  />
                </>
              }
            />

            <Setting
              description='Gamepiece'
              settings={
                <>
                  <div
                    onClick={() => {
                      setPlayerGamePiece('gamepieceX');
                      setAiGamePiece('gamepieceO');
                    }}
                    style={
                      playerGamePiece === 'gamepieceX'
                        ? {
                            border: '2px solid white',
                          }
                        : null
                    }
                  >
                    <GamepieceX solo={true} size={'clamp(30px,20vw,150px)'} />
                  </div>

                  <div
                    onClick={() => {
                      setPlayerGamePiece('gamepieceO');
                      setAiGamePiece('gamepieceX');
                    }}
                    style={
                      playerGamePiece === 'gamepieceO'
                        ? {
                            border: '2px solid white',
                          }
                        : null
                    }
                  >
                    <GamepieceO solo={true} size={'clamp(30px,20vw,150px)'} />
                  </div>
                </>
              }
            />
          </div>
        )}
      </div>
    </>
  );
}

{
  /* <div className='settingLineLeft'>Description:</div><div className='settingLineRight' >SETTING1 SETTING2</div>

  */
}
