import './App.css';
import './components/styles/sporadic.css'
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
