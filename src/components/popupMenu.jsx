import React from 'react';
import PopMenuButton from './popMenuButton';
import Setting from './settingsLine';
import GamepieceO from './gamepieceO';
import GamepieceX from './gamepieceX';
import { useContext } from 'react';
import GameBrain from '../Context';

export default function PopupMenu({ isOpen, setIsOpen }) {
  const { state, dispatch } = useContext(GameBrain);

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
                  <PopMenuButton text={'Easy'} />
                  <PopMenuButton text={'Medium'} />
                  <PopMenuButton text={'Hard'} />
                </>
              }
            />

            <Setting
              description='Gamepiece'
              settings={
                <>
                  <div
                    onClick={() => {
                      dispatch({
                        type: 'playerGamePiece',
                        payload: 'gamepieceX',
                      });
                      dispatch({ type: 'aiGamePiece', payload: 'gamepieceO' });
                    }}
                    style={
                      state.playerGamePiece === 'gamepieceX'
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
                      dispatch({
                        type: 'playerGamePiece',
                        payload: 'gamepieceO',
                      });
                      dispatch({ type: 'aiGamePiece', payload: 'gamepieceX' });
                    }}
                    style={
                      state.playerGamePiece === 'gamepieceO'
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
