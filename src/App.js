import './App.css';
import GamepieceX from './components/gamepieceX';
import GamepieceO from './components/gamepieceO';
import Game from './game';

function App() {
  return (
    <div className='App'>
      <Game width='1800px' />
      {/* <GamepieceX size={'100px'} solo={true} />
      <GamepieceO size={'100px'} solo={true} /> */}
    </div>
  );
}

export default App;
