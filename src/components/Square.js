import React from 'react';

const getSquareStyle = (squareNumber) =>{
    let squareStyle = "square";
    // if(squareNumber === 1 || squareNumber === 4 || squareNumber === 7 ){
    //     squareStyle = squareStyle+", vertical";
    // }else if(squareNumber === 3 || squareNumber === 4 || squareNumber === 5){
    //     squareStyle+=", horizontal";
    // }
    return squareStyle;
}

const Square = (props) =>  {
    const {value, onClick, squareNumber} = props || {};
    const squareStyle = getSquareStyle(squareNumber);
      return (
        <button className= {squareStyle} onClick={() => onClick()}>
          {value}
        </button>
      );
}

export default Square;