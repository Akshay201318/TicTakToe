import React, { useState } from 'react';
import Square from './Square';


const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

const  Board = (props) => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState('Next player: Your Turn!');

    const restartGame = () =>{
        setSquares(Array(9).fill(null))
        setIsXTurn(true);
        setStatus('Next player: Your Turn!')
    }

    const renderSquare = (i) => {
      return <Square 
      value = {squares[i]}
      onClick={() => handleClick(i)}
      />  
    }

    const handleClick = (i) => {
        const square = squares.slice();
        if (calculateWinner(square) || square[i]) {
            return;
          }
        square[i] = isXTurn ? 'X' : 'O';
        const winner = calculateWinner(square);
        setSquares(square);
        setIsXTurn(!isXTurn);
        let newStatus = "You Lost!!"
        if(winner){
            if(winner === 'X')
            newStatus = "Congratulations! You Won!!";
            setStatus(newStatus);
        }else{
            setStatus('Next player: ' + (!isXTurn ? 'Your Turn!' : "O's Turn!"))
        }
        
      }
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <button className = "restart-button" onClick = {() => restartGame()}>Restart Game</button>
        </div>
      );
}

export default Board;