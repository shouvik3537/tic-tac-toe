
export default function GameBoard ( {onSelectSquare, board } ){
    return(
        <ol id="game-board">
            {board.map((row, rowIndex) => (


import { useState } from "react";



import { useState } from "react";


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


export default function GameBoard ( {onSelectSquare, turns } ){

    //Now we need to turns the GameTurns array into a array which is like the initialGameBoard array.
    let gameBoard = initialGameBoard;
    //now we will update the gameBoard variable with the data from gameBoards, when data comes after every turn in the game.

    for (const turn of turns) {

     //destructure the square object to pull out the row, col index and the player.\
     const { square, player } = turn;
     const { row, col} = square;
     
    gameBoard[row][col] = player;

    }


//    const[gameBoard, setGameBoard] = useState(initialGameBoard);
//    function handleSelectSquare(rowIndex, colIndex){
//     setGameBoard((prevGameBoard) => {
//         const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
//         updateBoard[rowIndex][colIndex] = activePlayerSymbol;
//         return updateBoard;
//     })
//     onSelectSquare();
//    }


export default function GameBoard ( {onSelectSquare, activePlayerSymbol} ){

export default function GameBoard (){

   const[gameBoard, setGameBoard] = useState(initialGameBoard);
   function handleSelectSquare(rowIndex, colIndex){
    setGameBoard((prevGameBoard) => {
        const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];

        updateBoard[rowIndex][colIndex] = activePlayerSymbol;
        return updateBoard;
    })
    onSelectSquare();
   }


    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (

        updateBoard[rowIndex][colIndex] = 'X';
        return updateBoard;
    })
   }
    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
    return(
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => (


                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>

                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled = {playerSymbol !== null}>{playerSymbol}</button>


                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>

                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>


                                <button>{playerSymbol}</button>




                            </li>
                        ))}
                    </ol>

                </li>
            ))}

        </ol>
    );
}