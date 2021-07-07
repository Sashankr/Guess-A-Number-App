import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [guessRounds,setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber)
  }

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds)
  } 

  const configureNewGameHandler = () =>{
    setGuessRounds(0);
    setUserNumber(null) 
  }

  let content = <StartGameScreen onStartGame ={startGameHandler} />
  if(userNumber && guessRounds <=0 ){
    content = <GameScreen userChoice = {userNumber} onGameOver={gameOverHandler}  />
  }
  else if(guessRounds > 0){
    content =  <GameOverScreen rounds ={guessRounds} userNumber={userNumber} resetGame={configureNewGameHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header heading = {"Guess a number"}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen : {
    flex : 1,
    paddingTop : 25,
  }
});
