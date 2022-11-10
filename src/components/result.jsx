import './styles/result.css'


export default function Result({ text,gameResultlocation }) {
    return (
      <h1 style={gameResultlocation} className='gameResult'>
       
        {text}
        
      </h1>
    );
  }
