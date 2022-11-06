import React from 'react';
import { useContext } from 'react';
import GameBrain from '../Context';
export default function PopMenuButton({ text }) {
  const { state, dispatch } = useContext(GameBrain);

  return (
    <button
      onClick={() => {
        dispatch({ type: 'difficulty', payload: text });
      }}
      style={
        state.difficulty.includes(text)
          ? { backgroundColor: 'green', fontSize: '1.3rem' }
          : { backgroundColor: 'gray', fontSize: '1.3rem' }
      }
    >
      {text}
    </button>
  );
}
