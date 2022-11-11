import React, { useContext } from 'react';
import MenuLogo from './components/menuLogo';
import PopupMenu from './components/popupMenu';
import { useState } from 'react';
import BannerText from './components/bannerText';

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='Header'>
      <div className='headerLeft'>
        <MenuLogo isOpen={isOpen} setIsOpen={setIsOpen} />
        <PopupMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
     <BannerText text='Tic-Tac-Toe'/>
    </div>
  );
}
