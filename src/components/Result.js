import React from 'react'

const  Result = ({resultStyle, result}) => {
    const restartGame = () =>{
        window.location.reload()
    }
    return (
        <div className = {resultStyle}>
          <div className = "won-text">Player <div>{result}</div> won the game!</div>
          <div className ="btn">
              <button onClick = {()=> restartGame()}>Restart Game</button>
          </div> 
        </div>
    )
}

export default Result;