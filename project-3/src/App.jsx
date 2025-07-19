import React, { useState } from 'react'
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';




function App() {

  const [isGameStarted,setGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    
      <>
      {
        isGameStarted ?<GamePlay/> : <StartGame toggle = {toggleGamePlay} />
      }
      </>
    
  );
}

export default App