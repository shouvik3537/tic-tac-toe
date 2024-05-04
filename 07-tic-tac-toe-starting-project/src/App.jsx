import Player from "./components/Players"
function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player intialName="player1" symbol="X" />
          <Player intialName="player2" symbol="O" />
        </ol>
         GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App
