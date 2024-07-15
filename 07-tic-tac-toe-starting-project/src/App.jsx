import Player from "./components/Players";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/WINNING_COMBINATIONS";
import GameOver from "./components/GameOver";
import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  
        if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
          currentPlayer = 'O';
        }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = [...initialGameBoard.map(array => [...array])];
  let winner = null;
  let hasDraw;

  for (const turn of gameTurns) 
    {

    const { square, player } = turn;
    const { row, col} = square;

    gameBoard[row][col] = player;
  

    }
    for (const combination of WINNING_COMBINATIONS)

      {

        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];


        if( firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol)
          {
            winner = firstSquareSymbol;
            console.log({winner});
          }
         hasDraw = gameTurns.length === 9 && !winner;

      }
   
  const activePlayer = deriveActivePlayer(gameTurns);
  
  function handleActivePlayer(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {
        
           const currentActivePlayer = deriveActivePlayer(prevTurn);
           const updatedTurns = [{square: {row: rowIndex, col: colIndex} , player: currentActivePlayer}, ...prevTurn]; 
        
        return updatedTurns;
       });
  }
  function handleRematch(){
     setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className = "highlight-player" >
          <Player intialName="player1" symbol="X" isActive = {activePlayer === 'X'}/>
          <Player intialName="player2" symbol="O" isActive = {activePlayer === 'O'}/>
        </ol>
         { (winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch}/>}
         <GameBoard 
             onSelectSquare={handleActivePlayer} 
               board={gameBoard} 
             />
      </div>
      <Log  turns={gameTurns} />
    </main>
  );
}

export default App
