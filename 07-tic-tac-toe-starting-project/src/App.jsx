
import Player from "./components/Players";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Player from "./components/Players"
import GameBoard from "./components/GameBoard";
function App() {
  
  const [activePlayer, setActivePlayer] = useState('X');
  function handleActivePlayer() {
      setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className = "highlight-player" >
          <Player intialName="player1" symbol="X" isActive = {activePlayer === 'X'}/>
          <Player intialName="player2" symbol="O" isActive = {activePlayer === 'O'}/>
        </ol>
         <GameBoard onSelectSquare={handleActivePlayer} activePlayerSymbol = {activePlayer} />
         <GameBoard />

      </div>
      LOG
    </main>
  );
}

export default App
