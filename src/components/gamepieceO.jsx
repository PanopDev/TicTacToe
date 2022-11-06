import React from 'react';

export default function GamepieceO({ size, solo = false }) {
  return (
    <>
      {/* Interactive inside of Gameboard */}
      {!solo && (
        <div className='ocontainer'>
          <div className='innerO'>
            <div className='innerO innerO2'></div>
          </div>
        </div>
      )}
      
      {/* Standalone non-interactive */}
      {solo && (
        <div
          style={{ width: size, height: size }}
          className='gameSquare gamepieceO'
        >
          <div className='ocontainer'>
            <div className='innerO'>
              <div className='innerO innerO2'></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
