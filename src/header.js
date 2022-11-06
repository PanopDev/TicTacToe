import React, { useContext } from 'react';
import MenuLogo from './components/menuLogo';
import PopupMenu from './components/popupMenu';
import { useState, useRef } from 'react';
import { gameSettings, myContext } from './Context';

export default function Header() {
  const {
    setDifficulty,
    difficulty,
    gameStats,
    aiGamePiece,
    setAiGamePiece,
    playerGamePiece,
    setPlayerGamePiece,
  } = useContext(gameSettings);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='Header'>
      <div>
        <MenuLogo isOpen={isOpen} setIsOpen={setIsOpen} />

        <PopupMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <h1>Tic-Tac-Toe</h1>
    </div>
  );
}
