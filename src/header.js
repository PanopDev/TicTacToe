import React, { useContext } from 'react';
import MenuLogo from './components/menuLogo';
import PopupMenu from './components/popupMenu';
import { useState } from 'react';

export default function Header() {
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
