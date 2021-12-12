import React from 'react'

const  SelectPlayer = ({seletedBoxStyle, setSelectedPlayer}) => {
    return (
        <div className = {seletedBoxStyle}>
          <div className = "header">Tic Tak Toe</div>
          <div className ="content">
          <div className ="title"> Select which you want to be?</div>
          <div className = "options">
              <button className = "playerX" onClick = {() => setSelectedPlayer('X')}>Player (X)</button>
              <button className = "playerO" onClick = {() => setSelectedPlayer('O')}>Player (O)</button>
          </div>
          </div>   
        </div>
    )
}

export default SelectPlayer;
