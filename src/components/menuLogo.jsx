import React from 'react';

export default function MenuLogo({ isOpen, setIsOpen }) {
  return (
    <div
      onClick={(e) => {
        setIsOpen(!isOpen);
      }}
      className={isOpen ? 'menuLogo menuLogoExpanded' : 'menuLogo'}
    >
      <div className='menuLine'></div>
      <div className='menuLine'></div>
      <div className='menuLine'></div>
    </div>
  );
}
