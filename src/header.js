import React from 'react';
import MenuLogo from './components/menuLogo';
import PopupMenu from './components/popupMenu';
import { useState, useRef } from 'react';

export default function Header({
  setDifficulty,
  difficulty,
  gameStats,
  aiGamePiece,
  setAiGamePiece,
  playerGamePiece,
  setPlayerGamePiece,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='Header'>
      <div>
        <MenuLogo isOpen={isOpen} setIsOpen={setIsOpen} />
        <PopupMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setDifficulty={setDifficulty}
          difficulty={difficulty}
          gameStats={gameStats}
          playerGamePiece={playerGamePiece}
          setPlayerGamePiece={setPlayerGamePiece}
          aiGamePiece={aiGamePiece}
          setAiGamePiece={setAiGamePiece}
        />
      </div>
      <h1>Tic-Tac-Toe</h1>
    </div>
  );
}
