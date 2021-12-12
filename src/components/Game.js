import React from 'react';
import Board from './Board';

const Game = ({selectedPlayer, gameStyle, setResult}) => {
      let xturn = "xturn";
      let oturn = "oturn";
      return (
        <div className = {gameStyle}>
           <div className ="details">
               <div className ="players">
                   <span className = {xturn}>X's Turn</span>
                   <span className = {oturn}>O's Turn</span>
                   <div className = "slider"></div>
               </div>
           </div>
           <Board selectedPlayer = {selectedPlayer} setResult = {setResult}/>
        </div>
      );
}

export default Game;