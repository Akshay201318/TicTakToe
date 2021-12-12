import React, { useState } from 'react';
import Game from './components/Game';
import SelectPlayer from './components/SelectPlayer';
import Result from './components/Result';
import './App.css';

const App = () => {
  const [selectedPlayer , setSelectedPlayer] = useState("");
  const [result, setResult] = useState('');
  let seletedBoxStyle = "select-box";
  let gameStyle = "game-off";
  let resultStyle = "result-off"

  if(selectedPlayer){
    seletedBoxStyle = "select-box-off";
    gameStyle = "game"
  }

  if(result){
    gameStyle = "game-off";
    resultStyle = "result-box";
  }
  return (
    <div className = "app">
     <SelectPlayer seletedBoxStyle = {seletedBoxStyle} setSelectedPlayer = {setSelectedPlayer}/>
    <Game selectedPlayer = {selectedPlayer} gameStyle = {gameStyle} setResult = {setResult}/>
    <Result resultStyle = {resultStyle} result = {result}/>
    </div>
  );
}

export default App;
