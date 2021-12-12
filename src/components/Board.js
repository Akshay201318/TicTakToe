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

const  Board = ({selectedPlayer, setResult}) => {

    const [squares, setSquares] = useState(Array(9).fill(null));
     
    const [isXTurn, setIsXTurn] = useState(() => selectedPlayer === "X" ? true: false);

    const renderSquare = (i) => {
      return <Square 
      value = {squares[i]}
      squareNumber = {i}
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
        if(winner){
            if(winner === 'X'){
              setResult('X');
            }else{
                setResult('O')
            }
        }
        
      }
  
      return (
        <div className = "board">
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
        </div>
      );
}

export default Board;