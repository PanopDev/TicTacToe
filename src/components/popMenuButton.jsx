import React from 'react';
import { useState,useRef } from 'react';

export default function PopMenuButton({ text,setDifficulty,difficulty }) {
 

  return (
    <button
      onClick={() =>{setDifficulty(text)} }
      style={
        difficulty.includes(text)
          ? { backgroundColor: 'green', fontSize: '1.3rem' }
          : { backgroundColor: 'gray', fontSize: '1.3rem' }
      }
    >
      {text}
    </button>
  );
}
