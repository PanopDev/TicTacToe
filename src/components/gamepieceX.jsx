import React from 'react';

export default function GamepieceX({ size, solo = false }) {
  return (
    <>
      {/* Interactive inside of Gameboard */}
      {!solo && (
        <div className='xcontainer'>
          <div className='innerX'></div>
          <div className='innerX2'></div>
        </div>
      )}

      {/* Standalone non-interactive */}
      {solo && (
        <div
          style={{ width: size, height: size }}
          className='gameSquare gamepieceX'
        >
          <div className='xcontainer'>
            <div className='innerX'></div>
            <div className='innerX2'></div>
          </div>
        </div>
      )}
    </>
  );
}
