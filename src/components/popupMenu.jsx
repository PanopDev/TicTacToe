import React from 'react';
import Setting from './settingsLine';
import GamepieceO from './gamepieceO';
import GamepieceX from './gamepieceX';
import { useContext,useRef } from 'react';
import GameBrain from '../Context';
import WhoGoesFirst from './whoGoesFirst';
import { PopMenuButton, PopMenuCloseButton } from './popMenuButtons';


export default function PopupMenu({ isOpen, setIsOpen }) {
  const { state, dispatch } = useContext(GameBrain);
  const scrollToTop = useRef()

  return (
    <>
      <div ref={scrollToTop} className={isOpen ? 'popupMenu popupMenuOpen' : 'popupMenu'}>
        {isOpen && (
          <div className='innerTest'>
            <h1 className='gameStatusText settingsHeader'
             
            >
              Game Settings
             
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
                          border:'1px solid white',
                          boxShadow:'0px 0px 7px 7px #617c93'
                          }
                        : null
                    }
                  >
                    <GamepieceX solo={true} size={'clamp(30px,40vw,150px)'} />
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
                          border:'1px solid white',
                            boxShadow:'0px 0px 7px 5px #617c93'
                          }
                        : null
                    }
                  >
                    <GamepieceO solo={true} size={'clamp(30px,40vw,150px)'} />
                  </div>
                </>
              }
            />
            <PopMenuCloseButton scrollToTop={scrollToTop} isOpen={isOpen} setIsOpen={setIsOpen} text={'Continue'} />
          </div>
        )}
        {state.whoGoesFirstGameOpen && (<WhoGoesFirst/>)} 
      </div>
      
    </>
  );
}

{
  /* <div className='settingLineLeft'>Description:</div><div className='settingLineRight' >SETTING1 SETTING2</div>

  */
}
