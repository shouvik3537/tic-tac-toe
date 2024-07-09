import Player from "./components/Players";
import GameBoard from "./components/GameBoard";
//import Player from "./components/Log";
import { useState } from "react";

function App() {
  
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  function handleActivePlayer(rowIndex, colIndex) {
      setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
      setGameTurns((prevTurn) => {
        let currentPlayer = 'X';
        // Due to state mismatch we are storing the current Player symbol in a variable 
        if (prevTurn.length > 0 && prevTurn[0].player === 'X'){
          currentPlayer = 'O';
        }
        const updatedTurns = [{square: {row: rowIndex, col: colIndex} , player: currentPlayer}, ...prevTurn]; //square is object storing row, col index and cuurent active player.
        // Here the updatedTurns is storing all the data required related to a button, when clicked. 
        return updatedTurns;
      });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className = "highlight-player" >
          <Player intialName="player1" symbol="X" isActive = {activePlayer === 'X'}/>
          <Player intialName="player2" symbol="O" isActive = {activePlayer === 'O'}/>
        </ol>
         <GameBoard 
             onSelectSquare={handleActivePlayer} 
             //The game turns array we got is now been passed to GameBoard component.
             turns={gameTurns} 
             />
      </div>
    </main>
  );
}

export default App
